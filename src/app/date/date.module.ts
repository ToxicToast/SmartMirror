import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateContainerIndexComponent } from '../date/Containers/date-container-index/date-container-index.component';
import { ClockComponent } from '../date/Components/clock/clock.component';
import { CalendarComponent } from '../date/Components/calendar/calendar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DateContainerIndexComponent,
    ClockComponent,
    CalendarComponent
  ],
  exports: [
    DateContainerIndexComponent
  ]
})
export class DateModule { }
