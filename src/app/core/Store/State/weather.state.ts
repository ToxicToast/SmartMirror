import { Action, Selector, State, StateContext } from '@ngxs/store';
import { asapScheduler, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { WeatherStateModel, WeatherApiModel } from '../../Models/weather';
import { LoadWeather, LoadWeatherSuccess, LoadWeatherFailure } from '../Action/weather.action';
import { WeatherService } from '../../Service/weather.service';

@State<WeatherStateModel>({
  name: 'Weather',
  defaults: {
    loading: false,
    loaded: false,
    error: false,
    city: '',
    data: null
  }
})

export class WeatherState {
  constructor(private service: WeatherService) { }

  @Selector()
  static city(state: WeatherStateModel): string {
    return state.city;
  }

  @Selector()
  static weatherData(state: WeatherStateModel): WeatherApiModel {
    return state.data;
  }

  @Action(LoadWeather)
  loadWeather(ctx: StateContext<WeatherStateModel>, action: LoadWeather) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      loading: true,
      loaded: false,
      error: false,
      city: action.city,
      data: null
    });
    return this.service.loadWeatherData(action.city).then(subscriber => {
      subscriber.subscribe(data => {
        ctx.dispatch(new LoadWeatherSuccess(data));
      });
    }).catch(error => {
      ctx.dispatch(new LoadWeatherFailure(error));
    });
  }

  @Action(LoadWeatherSuccess)
  loadWeatherSuccess(ctx: StateContext<WeatherStateModel>, action: LoadWeatherSuccess) {
    ctx.patchState({
      loading: false,
      loaded: true,
      data: action.payload
    });
  }

  @Action(LoadWeatherFailure)
  loadWeatherFailure(ctx: StateContext<WeatherStateModel>, action: LoadWeatherFailure) {
    ctx.patchState({
      loading: false,
      loaded: false,
      error: true,
      data: null
    });
  }
}
