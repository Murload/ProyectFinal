import { TestBed } from '@angular/core/testing';

import { PopVisitService } from './pop-visit.service';

describe('PopVisitService', () => {
  let service: PopVisitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopVisitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
