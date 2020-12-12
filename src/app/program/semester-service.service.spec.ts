import { TestBed } from '@angular/core/testing';

import { SemesterServiceService } from './semester-service.service';

describe('SemesterServiceService', () => {
  let service: SemesterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SemesterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
