import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CartCheckoutService } from './cart-checkout.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('CartCheckoutService', () => {
  let service: CartCheckoutService;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ provideMockStore({}) ],
    });
    service = TestBed.inject(CartCheckoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
