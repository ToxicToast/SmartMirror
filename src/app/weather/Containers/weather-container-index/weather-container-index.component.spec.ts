import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherContainerIndexComponent } from './weather-container-index.component';

describe('WeatherContainerIndexComponent', () => {
  let component: WeatherContainerIndexComponent;
  let fixture: ComponentFixture<WeatherContainerIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherContainerIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherContainerIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
