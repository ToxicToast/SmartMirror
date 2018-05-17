import { Component, OnInit, Input } from '@angular/core';
import { CalendarStateModel } from '@core/Models/calendar';
import * as moment from 'moment';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'mirror-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  animations: [
    trigger('calendarAnimation', [
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
export class CalendarComponent implements OnInit {

  @Input() state: CalendarStateModel;

  constructor() {}

  ngOnInit() {
    console.log('Starting Component: Calendar');
  }

  eventDate(date, dateTime): string {
    const usedDate = (date !== null) ? date : dateTime;
    const dateNow = moment();
    const dateFuture = moment(usedDate);
    const diffInMs = dateFuture.diff(dateNow);
    const diffInDays = Math.ceil(this.getDiffInDays(diffInMs, 'days'));
    if (diffInMs <= 0) {
      return 'Heute';
    } else if (diffInDays === 1) {
      return 'Morgen';
    } else {
      return `In ${diffInDays} Tagen`;
    }
  }

  eventSummary(summary: string): string {
    if (summary.length >= 30) {
      return summary.substring(0, 30) + '...';
    }
    return summary;
  }

  get eventData() {
    return this.state.data;
  }

  private getDiffInDays(milliseconds: number, interval: string): number {
    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;
    const weeks = days * 7;
    //
    switch (interval) {
      case 'weeks': return (milliseconds / weeks);
      case 'days': return (milliseconds / days);
      case 'hours': return (milliseconds / hours);
      case 'minutes': return (milliseconds / minutes);
      case 'seconds': return (milliseconds / seconds);
    }
  }

}
