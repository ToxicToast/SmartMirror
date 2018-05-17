import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(
    private http: HttpClient
  ) { }

  async loadCalendarData() {
    const url = `https://backend.toxictoast.de/api/mirror/events`;
    // const url = 'http://backendtoxic.local/api/mirror/events';
    const data = await this.http.get(url).pipe(catchError((error: any) => throwError(error)));
    return data;
  }

}
