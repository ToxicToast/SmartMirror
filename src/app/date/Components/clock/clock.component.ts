import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'mirror-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  @Input() state: Date;

  constructor() {
    console.log('Starting Component: Clock');
  }

  ngOnInit() {
  }

  get weekDay() {
    moment().locale('de');
    const weekDay = moment(this.state).format('dddd');
    return weekDay;
  }

  get month() {
    moment().locale('de');
    const month = moment(this.state).format('MMMM');
    return month;
  }

  get dayAndYear() {
    moment().locale('de');
    const dayYear = moment(this.state).format('DD, YYYY');
    return dayYear;
  }

  get time() {
    moment().locale('de');
    const hour = moment(this.state).format('HH:mm');
    return hour;
  }

  get seconds() {
    moment().locale('de');
    const seconds = moment(this.state).format('ss');
    return seconds;
  }

  get weekOfYear() {
    moment().locale('de');
    const week = moment(this.state).format('WW');
    return week;
  }

}
