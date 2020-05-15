import { TestBed } from '@angular/core/testing';

import { RestServicesService } from './rest-services.service';

describe('RestServicesService', () => {
  let service: RestServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
