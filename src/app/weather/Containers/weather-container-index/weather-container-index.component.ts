import { Component, OnInit } from '@angular/core';

import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';
import { WeatherState } from '@core/Store/State/weather.state';
import { ForecastState } from '@core/Store/State/forecast.state';
import { LoadWeather, LoadForecast } from '@core/Store/Action/weather.action';
import { WeatherStateModel, ForecastStateModel } from '@core/Models/weather';
@Component({
  selector: 'mirror-weather-container-index',
  templateUrl: './weather-container-index.component.html',
  styleUrls: ['./weather-container-index.component.scss']
})
export class WeatherContainerIndexComponent implements OnInit {

  @Select(WeatherState) weather$: Observable<WeatherStateModel>;
  @Select(ForecastState) forecast$: Observable<ForecastStateModel>;

  city = 'Frankfurt am Main';

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
    this.loadWeatherForCity();
    this.loadForecastForCity();
    this.updateWeather();
  }

  private loadWeatherForCity() {
    this.store.dispatch(new LoadWeather(this.city));
  }

  private loadForecastForCity() {
    this.store.dispatch(new LoadForecast(this.city));
  }

  private updateWeather() {
    setInterval(() => {
      this.loadWeatherForCity();
      this.loadForecastForCity();
    }, ((60 * 60) * 1000));
  }

}
