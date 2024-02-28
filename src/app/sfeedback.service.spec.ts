import { TestBed } from '@angular/core/testing';

import { SfeedbackService } from './sfeedback.service';

describe('SfeedbackService', () => {
  let service: SfeedbackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SfeedbackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
