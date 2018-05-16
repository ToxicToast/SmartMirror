import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { CalendarComponent } from './calendar.component';
import { WeatherModule } from '../../../weather/weather.module';
import { CoreModule } from '../../../core/core.module';
import { NewsModule } from '../../../news/news.module';

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        NgxsModule.forRoot([]),
        WeatherModule,
        CoreModule,
        NewsModule
      ],
      declarations: [ CalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
