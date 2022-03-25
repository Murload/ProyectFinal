import { TestBed } from '@angular/core/testing';

import { UsersPrivTripsService } from './users-priv-trips.service';

describe('UsersPrivTripsService', () => {
  let service: UsersPrivTripsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersPrivTripsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
