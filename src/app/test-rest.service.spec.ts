import { TestBed, inject } from '@angular/core/testing';

import { TestRestService } from './test-rest.service';

describe('TestRestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestRestService]
    });
  });

  it('should be created', inject([TestRestService], (service: TestRestService) => {
    expect(service).toBeTruthy();
  }));
});
