import { TestBed, inject } from '@angular/core/testing';

import { RefereeService } from './referee.service';

describe('RefereeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RefereeService]
    });
  });

  it('should be created', inject([RefereeService], (service: RefereeService) => {
    expect(service).toBeTruthy();
  }));
});
