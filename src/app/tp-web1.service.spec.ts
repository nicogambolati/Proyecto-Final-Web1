import { TestBed } from '@angular/core/testing';

import { TpWeb1Service } from './tp-web1.service';

describe('TpWeb1Service', () => {
  let service: TpWeb1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TpWeb1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
