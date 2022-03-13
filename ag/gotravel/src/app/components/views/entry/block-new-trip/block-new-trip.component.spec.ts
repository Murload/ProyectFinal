import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockNewTripComponent } from './block-new-trip.component';

describe('BlockNewTripComponent', () => {
  let component: BlockNewTripComponent;
  let fixture: ComponentFixture<BlockNewTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockNewTripComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockNewTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
