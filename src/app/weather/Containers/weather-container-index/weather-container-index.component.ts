import { Component, OnInit } from '@angular/core';

import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';
import { WeatherState } from '../../../core/Store/State/weather.state';
import { LoadWeather } from '../../../core/Store/Action/weather.action';
import { WeatherStateModel } from '../../../core/Models/weather';

@Component({
  selector: 'mirror-weather-container-index',
  templateUrl: './weather-container-index.component.html',
  styleUrls: ['./weather-container-index.component.scss']
})
export class WeatherContainerIndexComponent implements OnInit {

  @Select(WeatherState) weather$: Observable<WeatherStateModel>;

  city = 'Bonames';

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
    this.loadWeatherForCity();
    this.updateWeather();
  }

  private loadWeatherForCity() {
    this.store.dispatch(new LoadWeather(this.city));
  }

  private updateWeather() {
    setInterval(() => {
      this.loadWeatherForCity();
    }, ((60 * 60) * 1000));
  }

}
