import { Component, OnInit, Input } from '@angular/core';
import { WeatherStateModel, WeatherIcons } from '../../../core/Models/weather';
import * as moment from 'moment';

@Component({
  selector: 'mirror-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {

  @Input() state: WeatherStateModel;

  constructor() { }

  ngOnInit() {
    console.log('Starting Component: CurrentWeather');
  }

  get temp(): string {
    return Number(this.state.data.main.temp).toFixed(1);
  }

  get weatherIcon(): string {
    const icon = this.state.data.weather[0].icon;
    return WeatherIcons[icon];
  }

  get wind(): string {
    return Number(this.state.data.wind.speed).toFixed(0);
  }

  get windDirection(): string {
    const deg = this.state.data.wind.deg;
    if (deg > 11.25 && deg <= 33.75) {
      return 'NNE';
    } else if (deg > 33.75 && deg <= 56.25) {
      return 'NE';
    } else if (deg > 56.25 && deg <= 78.75) {
      return 'ENE';
    } else if (deg > 78.75 && deg <= 101.25) {
      return 'E';
    } else if (deg > 101.25 && deg <= 123.75) {
      return 'ESE';
    } else if (deg > 123.75 && deg <= 146.25) {
      return 'SE';
    } else if (deg > 146.25 && deg <= 168.75) {
      return 'SSE';
    } else if (deg > 168.75 && deg <= 191.25) {
      return 'S';
    } else if (deg > 191.25 && deg <= 213.75) {
      return 'SSW';
    } else if (deg > 213.75 && deg <= 236.25) {
      return 'SW';
    } else if (deg > 236.25 && deg <= 258.75) {
      return 'WSW';
    } else if (deg > 258.75 && deg <= 281.25) {
      return 'W';
    } else if (deg > 281.25 && deg <= 303.75) {
      return 'WNW';
    } else if (deg > 303.75 && deg <= 326.25) {
      return 'NW';
    } else if (deg > 326.25 && deg <= 348.75) {
      return 'NNW';
    } else {
      return 'N';
    }
  }

  get sunrise() {
    moment.locale('de');
    const time = new Date(this.state.data.sys.sunrise * 1000);
    const momentTime = moment(time).format('HH:mm');
    return {
      rawTime: time.getTime(),
      time: momentTime,
      icon: 'wi-sunrise'
    };
  }

  get sunset() {
    moment.locale('de');
    const time = new Date(this.state.data.sys.sunset * 1000);
    const momentTime = moment(time).format('HH:mm');
    return {
      rawTime: time.getTime(),
      time: momentTime,
      icon: 'wi-sunset'
    };
  }

  get suntime() {
    const sunrise = this.sunrise;
    const sunset = this.sunset;
    const sunnow = new Date().getTime();
    return (sunrise.rawTime < sunnow && sunset.rawTime > sunnow) ? sunset : sunrise;
  }
}
