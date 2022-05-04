import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatIconModule],
      declarations: [CartComponent],
      providers: [provideMockStore({})]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call clearCart when clear cart button is clicked', () => {
    component.currentCart = [{
      id: 1,
      name: "test",
      description: "test",
      cost: 1200,
      categories: { id: 1, name: "test" },
      image: "img",
      seller:{
        id: 1,
        username: "test",
        email: "test@email.com",
        firstName: "test",
        active: true
      }
    }];
    fixture.detectChanges();
    const spy = spyOn(component, 'clearCart');

    const button = fixture.debugElement.query(By.css('.clear-cart'));
    button.nativeElement.click();

    expect(component.clearCart).toHaveBeenCalled();

  });
});
