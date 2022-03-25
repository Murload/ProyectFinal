import { TestBed } from '@angular/core/testing';

import { NanaAllService } from './nana-all.service';

describe('NanaAllService', () => {
  let service: NanaAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NanaAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
