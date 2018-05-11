export class LoadWeather {
  static readonly type = '[Weather] Load Weather';
  constructor(public city: string) { }
}

export class LoadWeatherSuccess {
  static readonly type = '[OpenWeather API] Load Weather - Success';
  constructor(public payload: any) { } // ToDo: Add Interface
}

export class LoadWeatherFailure {
  static readonly type = '[OpenWeather API] Load Weather - Failure';
  constructor(public error: any) { } // ToDo Add Interface
}
