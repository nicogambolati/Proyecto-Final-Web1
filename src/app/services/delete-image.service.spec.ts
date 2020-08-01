import { TestBed } from '@angular/core/testing';

import { DeleteImageService } from './delete-image.service';

describe('DeleteImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeleteImageService = TestBed.get(DeleteImageService);
    expect(service).toBeTruthy();
  });
});
