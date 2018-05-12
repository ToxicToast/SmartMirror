import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { CommonModule } from '@angular/common';

import { WeatherState } from '../core/Store/State/weather.state';

import { WeatherContainerIndexComponent } from '../weather/Containers/weather-container-index/weather-container-index.component';
import { CurrentWeatherComponent } from '../weather/Components/current-weather/current-weather.component';

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forFeature([
      WeatherState
    ])
  ],
  declarations: [
    WeatherContainerIndexComponent,
    CurrentWeatherComponent
  ],
  exports: [
    WeatherContainerIndexComponent
  ]
})
export class WeatherModule { }
