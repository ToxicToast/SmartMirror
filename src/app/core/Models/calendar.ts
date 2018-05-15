export interface CalendarApiModel {
  googleEvent: GoogleEvent;
}

export interface CalendarStateModel {
  loading: boolean;
  loaded: boolean;
  error: boolean;
  errorMessage: string | null;
  data: [CalendarApiModel] | null;
}


export interface GoogleEvent {
  anyoneCanAddSelf?: null;
  attendeesOmitted?: null;
  colorId?: null;
  created: string | Date;
  description?: string | null;
  endTimeUnspecified?: null;
  etag?: string | null;
  guestsCanInviteOthers?: null;
  guestsCanModify?: null;
  guestsCanSeeOtherGuests?: null;
  hangoutLink?: null;
  htmlLink?: string | null;
  iCalUID?: string | null;
  id: string;
  kind: string;
  location?: string | null;
  locked?: null;
  privateCopy?: null;
  recurrence?: null;
  recurringEventId?: null;
  sequence?: number;
  status?: string;
  summary: string;
  transparency?: null;
  updated: string | Date;
  visibility?: null;
  creator: EventUser;
  organizer: EventUser;
  start: EventDate;
  end: EventDate;
  reminders: {
    useDefault: boolean;
  };
}

interface EventUser {
  displayName: string | null;
  email: string | null;
  id: string | null;
  self: boolean | null;
}

interface EventDate {
  date: Date | null;
  dateTime: string | Date;
  timeZone: string;
}
