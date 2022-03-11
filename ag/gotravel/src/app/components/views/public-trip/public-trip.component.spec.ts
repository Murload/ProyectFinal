import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicTripComponent } from './public-trip.component';

describe('PublicTripComponent', () => {
  let component: PublicTripComponent;
  let fixture: ComponentFixture<PublicTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicTripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
