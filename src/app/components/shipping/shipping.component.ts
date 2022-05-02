import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Address } from '../../models/Address';
import { Order } from '../../models/Order';
import { AddressServiceService } from '../../services/address/address-service.service';
import { CartCheckoutService } from '../../services/cart/cart-checkout.service';
import { OrderService } from '../../services/order/order.service';
import { SnackbarService } from '../../services/snackbar/snackbar.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingAddressForm!: FormGroup;
  finalAddress: Address;
  order: Order;


  constructor(
    private fb: FormBuilder,
    private addressService: AddressServiceService,
    private orderService: OrderService,
    private cartCheckoutService: CartCheckoutService,
    private snackBarService: SnackbarService,
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

      this.finalAddress.addressLineOne = this.shippingAddressForm.value.addressLineOne;
      this.finalAddress.addressLineTwo = this.shippingAddressForm.value.addressLineTwo;
      this.finalAddress.city = this.shippingAddressForm.value.city;
      this.finalAddress.state = this.shippingAddressForm.value.state;
      this.finalAddress.country = this.shippingAddressForm.value.country;
      this.finalAddress.zip = this.shippingAddressForm.value.zip;
      this.finalAddress.solarSystem = this.shippingAddressForm.value.solarSystem;
      this.finalAddress.planet = this.shippingAddressForm.value.planet;

      this.addressService.postAddress(this.finalAddress);

      this.cartCheckoutService.getCart().subscribe(items =>{
        this.order.shippingAddress = this.finalAddress;
        this.order.orderProducts = items
        this.orderService.addOrder(this.order);
        this.snackBarService.success("shipping information saved");
        //add payment info from billing service
        }
      );
    } else {
      this.snackBarService.error("check the values");
      }
    }
}
