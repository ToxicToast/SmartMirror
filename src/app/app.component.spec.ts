import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherModule } from './weather/weather.module';
import { CoreModule } from './core/core.module';
import { DateModule } from './date/date.module';
import { NewsModule } from './news/news.module';
//
import { NgxsModule } from '@ngxs/store';
import * as mumble from 'mumble-js';
//
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        NgxsModule.forRoot([]),
        WeatherModule,
        CoreModule,
        DateModule,
        NewsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'mirror'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('mirror');
  }));
  it(`should show the mirror`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.status).toBeTruthy();
  }));
  it(`mumble.js should be available`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.mumble.mumbleClass.isAvailable()).toBeTruthy();
  }));
});
