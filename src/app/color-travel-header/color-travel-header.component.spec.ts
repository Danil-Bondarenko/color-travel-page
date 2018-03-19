import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorTravelHeaderComponent } from './color-travel-header.component';

describe('ColorTravelHeaderComponent', () => {
  let component: ColorTravelHeaderComponent;
  let fixture: ComponentFixture<ColorTravelHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorTravelHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorTravelHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
