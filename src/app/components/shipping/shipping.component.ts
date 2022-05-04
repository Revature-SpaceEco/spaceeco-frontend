import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Payment } from 'src/app/models/Payment';
import { BillingDetailsService } from 'src/app/services/billing-details/billing-details.service';
import { Address } from '../../models/Address';
import { Order } from '../../models/Order';
import { AddressServiceService } from '../../services/address/address-service.service';
import { CartCheckoutService } from '../../services/cart/cart-checkout.service';
import { OrderService } from '../../services/order/order.service';
import { SnackbarService } from '../../services/snackbar/snackbar.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingAddressForm!: FormGroup;
  finalAddress: Address;

  newAddress: Address = <Address>{};

  newPayment: Payment = <Payment>{};

  newBuyer: User = <User>{};
  
  order: Order = {
    id: 0,
    items: [],
    buyer: this.newBuyer,
    orderDate: 0,
    orderStatus: 'Pending',
    shippingAddressId: this.newAddress,
    payment: this.newPayment
  };

  constructor(
    private fb: FormBuilder,
    private orderService: OrderService,
    private cartCheckoutService: CartCheckoutService,
    private snackBarService: SnackbarService,
    private billingService: BillingDetailsService,
    private userService: UserService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.shippingAddressForm = this.fb.group({
      addressLineOne: new FormControl('', Validators.required),
      addressLineTwo: new FormControl(''),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required),
      planet: new FormControl('', Validators.required),
      solarSystem: new FormControl('', Validators.required),
    });
  }

  proceedToOrder() {

    if (this.shippingAddressForm.valid){
      this.finalAddress = {
        ...this.shippingAddressForm.value
      }

      this.billingService.getBillingDetails().subscribe(details => {
        this.order.payment.billingDetails = details;
      });

      this.cartCheckoutService.getCart().subscribe(items =>{
        this.order.shippingAddressId = this.finalAddress;
        this.order.items = items;
        }
      );

      this.userService.getUserById().subscribe(info => {
        this.order.buyer = info;
        this.orderService.addOrder(this.order).subscribe();
      }

      );

      this.router.navigate(['order']);
    }
    else {
      this.snackBarService.error("All fields are required.");
    }
  }
}
