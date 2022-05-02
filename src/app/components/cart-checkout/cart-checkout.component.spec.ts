import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { CartCheckoutService } from '../../services/cart/cart-checkout.service';
import { CartComponent } from '../cart/cart.component';
import { CartCheckoutComponent } from './cart-checkout.component';

describe('CartCheckoutComponent', () => {
  let component: CartCheckoutComponent;
  let fixture: ComponentFixture<CartCheckoutComponent>;
  let cartCheckoutService: CartCheckoutService;
  let cartSpy: any;
  let store: MockStore;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ CartCheckoutService, provideMockStore({}) ],
      declarations: [ CartCheckoutComponent, CartComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartCheckoutComponent);
    cartCheckoutService = TestBed.inject(CartCheckoutService);
    cartSpy = spyOn(cartCheckoutService, 'getCart').and.callThrough();
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
