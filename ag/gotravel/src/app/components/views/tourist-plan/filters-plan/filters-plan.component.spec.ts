import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersPlanComponent } from './filters-plan.component';

describe('FiltersPlanComponent', () => {
  let component: FiltersPlanComponent;
  let fixture: ComponentFixture<FiltersPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltersPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
