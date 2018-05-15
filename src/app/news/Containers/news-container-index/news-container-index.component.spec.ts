import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsContainerIndexComponent } from './news-container-index.component';

describe('NewsContainerIndexComponent', () => {
  let component: NewsContainerIndexComponent;
  let fixture: ComponentFixture<NewsContainerIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsContainerIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsContainerIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
