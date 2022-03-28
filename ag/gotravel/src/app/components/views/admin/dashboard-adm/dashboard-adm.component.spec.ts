import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdmComponent } from './dashboard-adm.component';

describe('DashboardAdmComponent', () => {
  let component: DashboardAdmComponent;
  let fixture: ComponentFixture<DashboardAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAdmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
