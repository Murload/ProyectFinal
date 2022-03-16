import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitledescComponent } from './titledesc.component';

describe('TitledescComponent', () => {
  let component: TitledescComponent;
  let fixture: ComponentFixture<TitledescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitledescComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitledescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
