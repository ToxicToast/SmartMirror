import { Component } from '@angular/core';
import * as moment from 'moment';
import { Store } from '@ngxs/store';

import { WeatherState } from '@core/Store/State/weather.state';
import { ForecastState } from '@core/Store/State/forecast.state';

import { LoadWeather, LoadForecast } from '@core/Store/Action/weather.action';
import { WeatherStateModel, ForecastStateModel } from '@core/Models/weather';

import { AlexaService } from '@core/Service/alexa.service';

@Component({
  selector: 'mirror-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mirror';
  status = true;

  constructor(
    private store: Store,
    private mumble: AlexaService
  ) {
    this.mumble.start();
    this.mumble.addCommand('sleep', 'sleep', () => {
      console.error('sleep');
      this.status = false;
    });
    this.mumble.addCommand('wake', 'wakeup', () => {
      console.error('wakeup');
      this.status = true;
    });
    this.mumble.addCommand('weather', 'what is the weather in (.+)', city => {
      console.error('what is the weather in', city);
      this.store.dispatch(new LoadWeather(city));
      this.store.dispatch(new LoadForecast(city));
    });

    moment.locale('de');
  }
}
