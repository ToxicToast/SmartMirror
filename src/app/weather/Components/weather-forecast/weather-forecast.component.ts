import { Component, OnInit, Input } from '@angular/core';
import { ForecastStateModel, WeatherIcons } from '@core/Models/weather';
import * as moment from 'moment';

@Component({
  selector: 'mirror-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
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
