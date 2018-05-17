import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { CommonModule } from '@angular/common';
import { DateContainerIndexComponent } from '@date/Containers/date-container-index/date-container-index.component';
import { ClockComponent } from '@date/Components/clock/clock.component';
import { CalendarComponent } from '@date/Components/calendar/calendar.component';

import { CalendarState } from '@core/Store/State/calendar.state';

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forFeature([
      CalendarState
    ])
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
