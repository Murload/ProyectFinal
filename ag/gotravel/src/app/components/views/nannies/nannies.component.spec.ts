import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NanniesComponent } from './nannies.component';

describe('NanniesComponent', () => {
  let component: NanniesComponent;
  let fixture: ComponentFixture<NanniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NanniesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NanniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
