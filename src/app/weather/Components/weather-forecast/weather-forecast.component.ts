import { Component, OnInit, Input } from '@angular/core';
import { ForecastStateModel, WeatherIcons } from '@core/Models/weather';
import * as moment from 'moment';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'mirror-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss'],
  animations: [
    trigger('weatherForecastAnimation', [
      state('false', style({
        opacity: 0
      })),
      state('true',   style({
        opacity: 1
      })),
      transition('false <=> true', animate('0.2s', style({
        opacity: 1
      })))
    ])
  ]
})
export class WeatherForecastComponent implements OnInit {

  @Input() state: ForecastStateModel;

  constructor() { }

  ngOnInit() {
    console.log('Starting Component: Forecast');
  }

  get city() {
    return this.state.city;
  }

  get country() {
    return this.state.data.city.country;
  }

  get weatherList() {
    return this.state.data.list;
  }

  dayname(dt: number) {
    const time = new Date(dt * 1000);
    return moment(time).format('dd');
  }

  maxTemp(temp) {
    return Number(temp.max).toFixed(1);
  }

  minTemp(temp) {
    return Number(temp.min).toFixed(1);
  }

  weathericon(iconname) {
    return WeatherIcons[iconname.icon];
  }


}
