import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trips4PublicComponent } from './trips4-public.component';

describe('Trips4PublicComponent', () => {
  let component: Trips4PublicComponent;
  let fixture: ComponentFixture<Trips4PublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Trips4PublicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Trips4PublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
