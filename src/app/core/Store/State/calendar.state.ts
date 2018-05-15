import { Action, Selector, State, StateContext } from '@ngxs/store';
import { asapScheduler, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { CalendarStateModel, CalendarApiModel } from '../../Models/calendar';
import { LoadCalendar, LoadCalendarSuccess, LoadCalendarFailure } from '../Action/calendar.action';
import { CalendarService } from '../../Service/calendar.service';


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

  constructor(private service: CalendarService) { }

  @Action(LoadCalendar)
  loadCalendar(ctx: StateContext<CalendarStateModel>, action: LoadCalendar) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      loading: true,
      loaded: false,
      error: false,
      errorMessage: null,
      data: null
    });
    return this.service.loadCalendarData().then(subscriber => {
      subscriber.subscribe((data: CalendarApiModel) => {
        ctx.dispatch(new LoadCalendarSuccess(data));
      });
    }).catch(error => {
       ctx.dispatch(new LoadCalendarFailure(error));
    });
  }

  @Action(LoadCalendarSuccess)
  LoadCalendarSuccess(ctx: StateContext<CalendarStateModel>, action: LoadCalendarSuccess) {
    ctx.patchState({
      loading: false,
      loaded: true,
      data: action.payload
    });
  }

}
