import { CalendarApiModel } from '@core/Models/calendar';

export class LoadCalendar {
  static readonly type = '[Calendar] Load Calendar';
}

export class LoadCalendarSuccess {
  static readonly type = '[Calendar] Load Calendar - Success';
  constructor(public payload: CalendarApiModel) { }
}

export class LoadCalendarFailure {
  static readonly type = '[Calendar] Load Calendar - Failure';
  constructor(public error: any) { } // ToDo Add Interface
}
