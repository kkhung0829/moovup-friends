import { TestBed } from '@angular/core/testing';

import { FriendsEndPointService } from './friends-end-point.service';

describe('FriendsEndPointService', () => {
  let service: FriendsEndPointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FriendsEndPointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
