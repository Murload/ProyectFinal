import { TestBed } from '@angular/core/testing';

import { NanniesService } from './nannies.service';

describe('NanniesService', () => {
  let service: NanniesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NanniesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
