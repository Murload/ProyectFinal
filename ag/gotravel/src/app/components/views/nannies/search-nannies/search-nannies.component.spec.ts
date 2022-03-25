import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNanniesComponent } from './search-nannies.component';

describe('SearchNanniesComponent', () => {
  let component: SearchNanniesComponent;
  let fixture: ComponentFixture<SearchNanniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchNanniesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchNanniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
