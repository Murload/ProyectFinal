import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherTripsComponent } from './other-trips.component';

describe('OtherTripsComponent', () => {
  let component: OtherTripsComponent;
  let fixture: ComponentFixture<OtherTripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherTripsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
