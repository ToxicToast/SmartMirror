import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherModule } from '../weather/weather.module';

import { AlexaService } from './Service/alexa.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [],
  providers: [
    AlexaService
  ],
})
export class CoreModule { }
