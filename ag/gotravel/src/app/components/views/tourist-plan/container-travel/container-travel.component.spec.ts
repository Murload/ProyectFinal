import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerTravelComponent } from './container-travel.component';

describe('ContainerTravelComponent', () => {
  let component: ContainerTravelComponent;
  let fixture: ComponentFixture<ContainerTravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerTravelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
