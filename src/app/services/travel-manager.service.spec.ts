import { TestBed } from '@angular/core/testing';

import { TravelManagerService } from './travel-manager.service';

describe('TravelManagerService', () => {
  let service: TravelManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
