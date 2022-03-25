import { TestBed } from '@angular/core/testing';

import { SearchNanniesService } from './search-nannies.service';

describe('SearchNanniesService', () => {
  let service: SearchNanniesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchNanniesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
