import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { CommonModule } from '@angular/common';

import { WeatherState } from '../core/Store/State/weather.state';

import { WeatherContainerIndexComponent } from '../weather/Containers/weather-container-index/weather-container-index.component';

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forFeature([
      WeatherState
    ])
  ],
  declarations: [
    WeatherContainerIndexComponent
  ],
  exports: [
    WeatherContainerIndexComponent
  ]
})
export class WeatherModule { }
