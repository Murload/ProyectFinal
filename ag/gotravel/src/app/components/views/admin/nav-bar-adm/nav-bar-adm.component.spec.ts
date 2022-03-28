import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarAdmComponent } from './nav-bar-adm.component';

describe('NavBarAdmComponent', () => {
  let component: NavBarAdmComponent;
  let fixture: ComponentFixture<NavBarAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarAdmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
