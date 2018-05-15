import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  private baseUrl: string;

  constructor(
    private http: HttpClient
  ) { }

  async loadCalendarData() {
    const url = `${this.baseUrl}`;
    const data = await this.http.get(url).pipe(catchError((error: any) => throwError(error)));
    return data;
  }

}
