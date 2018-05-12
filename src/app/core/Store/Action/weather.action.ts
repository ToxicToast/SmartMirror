import { WeatherApiModel, ForecastApiModel } from '../../Models/weather';

export class LoadWeather {
  static readonly type = '[Weather] Load Weather';
  constructor(public city: string) { }
}

export class LoadWeatherSuccess {
  static readonly type = '[OpenWeather API] Load Weather - Success';
  constructor(public payload: WeatherApiModel) { }
}

export class LoadWeatherFailure {
  static readonly type = '[OpenWeather API] Load Weather - Failure';
  constructor(public error: any) { } // ToDo Add Interface
}

export class LoadForecast {
  static readonly type = '[Weather] Load Forecast';
  constructor(public city: string) { }
}

export class LoadForecastSuccess {
  static readonly type = '[OpenWeather API] Load Forecast - Success';
  constructor(public payload: ForecastApiModel) { }
}
