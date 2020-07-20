import { TestBed, async, inject } from '@angular/core/testing';

import { LoggedUserGuard } from './logged-user.guard';

describe('LoggedUserGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggedUserGuard]
    });
  });

  it('should ...', inject([LoggedUserGuard], (guard: LoggedUserGuard) => {
    expect(guard).toBeTruthy();
  }));
});
