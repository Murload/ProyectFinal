import { TestBed } from '@angular/core/testing';

import { TouristplanService } from './touristplan.service';

describe('TouristplanService', () => {
  let service: TouristplanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TouristplanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
