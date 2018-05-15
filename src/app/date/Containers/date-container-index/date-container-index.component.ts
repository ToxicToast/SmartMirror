import { Component, OnInit } from '@angular/core';
import * as ical from 'ical';

@Component({
  selector: 'mirror-date-container-index',
  templateUrl: './date-container-index.component.html',
  styleUrls: ['./date-container-index.component.scss']
})
export class DateContainerIndexComponent implements OnInit {

  currentTime = new Date();
  calendarUrl: string;

  constructor() {
    this.calendarUrl = 'https://calendar.google.com/calendar/ical/2frvpfn0p0beldmscmv4p30egc%40group.calendar.google.com/private-9573e48045552b99b9bc5912e5894dff/basic.ics';
  }

  ngOnInit() {
    this.clockTick();
    this.getCalendar();
  }

  clockTick() {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }

  getCalendar() {
     // Call Calendar State
    ical.fromURL(this.calendarUrl, {}, (err, data) => {
      if (err) {
        console.error(err);
        // Call Calendar State - Failure
      } else {
        console.error(data);
        // Call Calendar State - Success
      }
    });
  }
}
