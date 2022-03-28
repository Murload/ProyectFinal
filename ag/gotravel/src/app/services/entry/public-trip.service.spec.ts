import { TestBed } from '@angular/core/testing';

import { PublicTripService } from './public-trip.service';

describe('PublicTripService', () => {
  let service: PublicTripService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicTripService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
