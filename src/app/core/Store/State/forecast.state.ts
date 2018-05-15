import { Action, Selector, State, StateContext } from '@ngxs/store';
import { asapScheduler, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ForecastStateModel, ForecastApiModel } from '../../Models/weather';
import { LoadForecast, LoadForecastSuccess } from '../Action/weather.action';
import { WeatherService } from '../../Service/weather.service';

@State<ForecastStateModel>({
  name: 'Forecast',
  defaults: {
    loading: false,
    loaded: false,
    error: false,
    errorMessage: null,
    city: '',
    data: null
  }
})

export class ForecastState {

  constructor(private service: WeatherService) { }

  @Action(LoadForecast)
  loadWeather(ctx: StateContext<ForecastStateModel>, action: LoadForecast) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      loading: true,
      loaded: false,
      error: false,
      city: action.city,
      data: null
    });
    return this.service.loadForecastData(action.city).then(subscriber => {
      subscriber.subscribe((data: ForecastApiModel) => {
        ctx.dispatch(new LoadForecastSuccess(data));
      });
    }).catch(error => {
       // ctx.dispatch(new LoadWeatherFailure(error));
    });
  }

  @Action(LoadForecastSuccess)
  loadWeatherSuccess(ctx: StateContext<ForecastStateModel>, action: LoadForecastSuccess) {
    ctx.patchState({
      loading: false,
      loaded: true,
      data: action.payload
    });
  }

}
