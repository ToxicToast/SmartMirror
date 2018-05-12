import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { CommonModule } from '@angular/common';

import { WeatherState } from '../core/Store/State/weather.state';
import { ForecastState } from '../core/Store/State/forecast.state';

import { WeatherContainerIndexComponent } from '../weather/Containers/weather-container-index/weather-container-index.component';
import { CurrentWeatherComponent } from '../weather/Components/current-weather/current-weather.component';
import { WeatherForecastComponent } from '../weather/Components/weather-forecast/weather-forecast.component';

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forFeature([
      WeatherState,
      ForecastState
    ])
  ],
  declarations: [
    WeatherContainerIndexComponent,
    CurrentWeatherComponent,
    WeatherForecastComponent
  ],
  exports: [
    WeatherContainerIndexComponent
  ]
})
export class WeatherModule { }
