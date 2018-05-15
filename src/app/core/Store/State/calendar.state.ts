import { Action, Selector, State, StateContext } from '@ngxs/store';
import { asapScheduler, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { CalendarStateModel, CalendarApiModel } from '../../Models/calendar';

@State<CalendarStateModel>({
  name: 'Calendar',
  defaults: {
    loading: false,
    loaded: false,
    error: false,
    errorMessage: null,
    data: null
  }
})

export class CalendarState {

}
