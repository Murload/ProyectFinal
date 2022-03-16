import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewtripComponent } from './form-newtrip.component';

describe('FormNewtripComponent', () => {
  let component: FormNewtripComponent;
  let fixture: ComponentFixture<FormNewtripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNewtripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNewtripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
