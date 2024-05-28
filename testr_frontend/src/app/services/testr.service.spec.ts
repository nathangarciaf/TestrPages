import { TestBed } from '@angular/core/testing';

import { TestrService } from './testr.service';

describe('TestrService', () => {
  let service: TestrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
