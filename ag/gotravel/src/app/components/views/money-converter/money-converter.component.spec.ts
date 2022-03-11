import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyConverterComponent } from './money-converter.component';

describe('MoneyConverterComponent', () => {
  let component: MoneyConverterComponent;
  let fixture: ComponentFixture<MoneyConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoneyConverterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
