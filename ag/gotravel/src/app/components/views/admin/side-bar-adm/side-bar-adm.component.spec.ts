import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarAdmComponent } from './side-bar-adm.component';

describe('SideBarAdmComponent', () => {
  let component: SideBarAdmComponent;
  let fixture: ComponentFixture<SideBarAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarAdmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
