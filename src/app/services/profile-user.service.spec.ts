import { TestBed } from '@angular/core/testing';

import { ProfileUserService } from './profile-user.service';

describe('ProfileUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfileUserService = TestBed.get(ProfileUserService);
    expect(service).toBeTruthy();
  });
});
