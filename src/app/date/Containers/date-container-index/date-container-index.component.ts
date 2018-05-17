import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CalendarState } from '@core/Store/State/calendar.state';
import { LoadCalendar } from '@core/Store/Action/calendar.action';
import { CalendarStateModel } from '@core/Models/calendar';

@Component({
  selector: 'mirror-date-container-index',
  templateUrl: './date-container-index.component.html',
  styleUrls: ['./date-container-index.component.scss']
})
export class DateContainerIndexComponent implements OnInit {

  currentTime = new Date();
  @Select(CalendarState) calendar$: Observable<CalendarStateModel>;

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
    this.clockTick();
    this.loadCalendar();
    this.updateCalendar();
  }

  clockTick() {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }

  private loadCalendar() {
    this.store.dispatch(new LoadCalendar());
  }

  private updateCalendar() {
    setInterval(() => {
      this.loadCalendar();
    }, ((60 * 60) * 1000));
  }
}
