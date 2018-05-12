import { Component, OnInit } from '@angular/core';

import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';
import { WeatherState } from '../../../core/Store/State/weather.state';
import { ForecastState } from '../../../core/Store/State/forecast.state';
import { LoadWeather, LoadForecast } from '../../../core/Store/Action/weather.action';
import { WeatherStateModel, ForecastStateModel } from '../../../core/Models/weather';
import { AlexaService } from '../../../core/Service/alexa.service';

import { fadeAnimation } from '../../../core/helpers/Animation';

@Component({
  selector: 'mirror-weather-container-index',
  templateUrl: './weather-container-index.component.html',
  styleUrls: ['./weather-container-index.component.scss'],
  animations: [fadeAnimation]
})
export class WeatherContainerIndexComponent implements OnInit {

  @Select(WeatherState) weather$: Observable<WeatherStateModel>;
  @Select(ForecastState) forecast$: Observable<ForecastStateModel>;

  city = 'Bonames';

  constructor(
    private store: Store,
    private voiceService: AlexaService
  ) { }

  ngOnInit() {
    this.loadWeatherForCity();
    this.loadForecastForCity();
    this.updateWeather();
    this.addVoiceCommand();
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

  private addVoiceCommand() {
    this.voiceService.addCommand('weather', 'what is the weather in (.+)', (city) => {
      this.store.dispatch(new LoadWeather(city));
      this.store.dispatch(new LoadForecast(city));
    });
  }

}
