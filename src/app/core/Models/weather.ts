export interface WeatherStateModel {
  loading: boolean;
  loaded: boolean;
  error: boolean;
  errorMessage: string|null;
  city: string;
  data: WeatherApiModel|null;
}

export interface ForecastStateModel {
  loading: boolean;
  loaded: boolean;
  error: boolean;
  errorMessage: string|null;
  city: string;
  data: ForecastApiModel|null;
}

export interface WeatherApiModel {
  cord?: {
    lat: number;
    lon: number;
  };
  weather: WeatherApiWeatherArray[];
  base?: string;
  main?: {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
  };
  visibility?: number;
  wind?: {
    speed: number;
    deg: number;
  };
  clouds?: {
    all: number;
  };
  dt?: number;
  sys?: {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  id?: number;
  name?: string;
  cod?: number;
}

export interface ForecastApiModel {
  city: {
    id: number;
    name: string;
    coord: {
      lon: number;
      lat: number;
    };
    country: string;
    population: number;
  };
  cod: string;
  message: number;
  cnt: number;
  list: ForecastApiForecastArray[];
}

interface WeatherApiWeatherArray {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface ForecastApiForecastArray {
  dt: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  pressure: number;
  humidity: number;
  weather: ForecastApiWeatherArray[];
  speed: number;
  deg: number;
  clouds: number;
}

interface ForecastApiWeatherArray {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export enum WeatherIcons {
  '01d' = 'wi-day-sunny',
  '02d' = 'wi-day-cloudy',
  '03d' = 'wi-cloudy',
  '04d' = 'wi-cloudy-windy',
  '09d' = 'wi-showers',
  '10d' = 'wi-rain',
  '11d' = 'wi-thunderstorm',
  '13d' = 'wi-snow',
  '50d' = 'wi-fog',
  '01n' = 'wi-night-clear',
  '02n' = 'wi-night-cloudy',
  '03n' = 'wi-night-cloudy',
  '04n' = 'wi-night-cloudy',
  '09n' = 'wi-night-showers',
  '10n' = 'wi-night-rain',
  '11n' = 'wi-night-thunderstorm',
  '13n' = 'wi-night-snow',
  '50n' = 'wi-night-alt-cloudy-windy'
}
