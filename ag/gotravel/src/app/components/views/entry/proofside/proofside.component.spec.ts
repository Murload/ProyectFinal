import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProofsideComponent } from './proofside.component';

describe('ProofsideComponent', () => {
  let component: ProofsideComponent;
  let fixture: ComponentFixture<ProofsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProofsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProofsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
