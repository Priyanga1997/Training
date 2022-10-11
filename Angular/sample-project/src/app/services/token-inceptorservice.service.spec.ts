import { TestBed } from '@angular/core/testing';

import { TokenInceptorserviceService } from './token-inceptorservice.service';

describe('TokenInceptorserviceService', () => {
  let service: TokenInceptorserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenInceptorserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
