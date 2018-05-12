import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private baseUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = '//api.openweathermap.org/data/2.5/';
  }

  async loadWeatherData(city: string) {
    const url = `${this.baseUrl}weather${this.setParams(city, 'metric', 'de', environment.api.openweather)}`;
    const data = await this.http.get(url).pipe(catchError((error: any) => throwError(error.json())));
    return data;
  }

  async loadForecastData(city: string) {
    const url = `${this.baseUrl}forecast/daily${this.setParams(city, 'metric', 'de', environment.api.openweather)}`;
    const data = await this.http.get(url).pipe(catchError((error: any) => throwError(error.json())));
    return data;
  }

  private setParams(location: string, units: string, lang: string, appId: string) {
    return `?q=${location}&units=${units}&lang=${lang}&APPID=${appId}`;
  }
}
