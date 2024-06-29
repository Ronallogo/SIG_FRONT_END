import { TestBed } from '@angular/core/testing';

import { MakeRegistrationService } from './make-registration.service';

describe('MakeRegistrationService', () => {
  let service: MakeRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MakeRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
