import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockVisitComponent } from './block-visit.component';

describe('BlockVisitComponent', () => {
  let component: BlockVisitComponent;
  let fixture: ComponentFixture<BlockVisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockVisitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
