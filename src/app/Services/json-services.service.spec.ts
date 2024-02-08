import { TestBed } from '@angular/core/testing';

import { JsonServicesService } from './json-services.service';

describe('JsonServicesService', () => {
  let service: JsonServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
