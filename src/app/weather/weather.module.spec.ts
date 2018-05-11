import { WeatherModule } from './weather.module';

describe('WeatherModule', () => {
  let weatherModule: WeatherModule;

  beforeEach(() => {
    weatherModule = new WeatherModule();
  });

  it('should create an instance', () => {
    expect(weatherModule).toBeTruthy();
  });
});
