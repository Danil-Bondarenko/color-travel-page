import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorTravelNewsComponent } from './color-travel-news.component';

describe('ColorTravelNewsComponent', () => {
  let component: ColorTravelNewsComponent;
  let fixture: ComponentFixture<ColorTravelNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorTravelNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorTravelNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
