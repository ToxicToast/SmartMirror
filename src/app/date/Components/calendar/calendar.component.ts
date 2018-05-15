import { Component, OnInit, Input } from '@angular/core';
import { CalendarStateModel } from '../../../core/Models/calendar';
import * as moment from 'moment';

@Component({
  selector: 'mirror-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  @Input() state: CalendarStateModel;

  constructor() { }

  ngOnInit() {
  }

  eventDate(date, dateTime) {
    const dateNow = moment();
    const dateFuture = moment(date || dateTime);
    const diffInMs = dateFuture.diff(dateNow);
    const diffInDays = dateFuture.diff(dateNow, 'days');
    if (diffInDays > 0 && diffInDays < 2) {
      return `In ${diffInDays} Tag`;
    } else if (diffInDays > 1) {
      return `In ${diffInDays} Tagen`;
    } else {
      return 'Heute';
    }
  }

  get eventData() {
    return this.state.data;
  }

}
