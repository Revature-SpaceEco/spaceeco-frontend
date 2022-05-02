import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BillingDetails } from '../../models//BillingDetails';
import { BillingDetailsService } from '../../services/billing-details/billing-details.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Address } from '../../models/Address';
import { AddressServiceService } from '../../services/address/address-service.service';
import { SnackbarService } from '../../services/snackbar/snackbar.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  billingForm!: FormGroup;
  billingAddressForm!: FormGroup;

  finalAddress: Address;
  finalBillingDetails: BillingDetails;
  
  @Output() nextStep = new EventEmitter<number>();

  billingDetails: BillingDetails;

  constructor(
    private fb: FormBuilder, 
    private billingService: BillingDetailsService,
    private addressService: AddressServiceService,
    private snackBarService: SnackbarService,
    ) { }

  ngOnInit(): void {
    this.billingForm = this.fb.group({
      billingName: new FormControl('', Validators.required),
      billingCardType: new FormControl('', Validators.required),
      billingCardNumber: new FormControl('', Validators.required),
      billingSecurityNumber: new FormControl('', Validators.required)
  });
  
    this.billingAddressForm = this.fb.group({
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

  proceedToShipping() {
    if (this.billingForm.valid || this.billingAddressForm.valid){
      this.finalBillingDetails.billingCardType = this.billingForm.value.billingCardType;
      this.finalBillingDetails.billingCardNumber = this.billingForm.value.billingCardNumber;
      this.finalBillingDetails.billingSecurityNumber = this.billingForm.value.billingSecurityNumber;
      this.finalBillingDetails.billingName = this.billingForm.value.billingName;

      this.finalAddress.addressLineOne = this.billingAddressForm.value.addressLineOne;
      this.finalAddress.addressLineTwo = this.billingAddressForm.value.addressLineTwo;
      this.finalAddress.city = this.billingAddressForm.value.city;
      this.finalAddress.state = this.billingAddressForm.value.state;
      this.finalAddress.country = this.billingAddressForm.value.country;
      this.finalAddress.zip = this.billingAddressForm.value.zip;
      this.finalAddress.solarSystem = this.billingAddressForm.value.solarSystem;
      this.finalAddress.planet = this.billingAddressForm.value.planet;

      this.addressService.postAddress(this.finalAddress);

      this.finalBillingDetails.billingAddress = this.finalAddress;

      this.billingService.addBillingDetails(this.finalBillingDetails);

      this.snackBarService.success("Billing information saved");

      this.nextStep.emit(3);
    } else {
        this.snackBarService.error("Check the values");
    }
  }
}
