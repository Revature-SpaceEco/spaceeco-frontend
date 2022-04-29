import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CartCheckoutService } from './cart-checkout.service';

describe('CartCheckoutService', () => {
  let service: CartCheckoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(CartCheckoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
