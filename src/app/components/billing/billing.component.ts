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
      name: new FormControl('', Validators.required),
      cardType: new FormControl('', Validators.required),
      cardNumber: new FormControl('', Validators.required),
      securityNumber: new FormControl('', Validators.required)
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
    console.log(this.billingForm.value);
    console.log(this.billingAddressForm.value);
    if (this.billingForm.valid || this.billingAddressForm.valid){
      this.finalBillingDetails = {
        ...this.billingForm.value
      }
      this.finalAddress = {
        ...this.billingAddressForm.value
      }

      this.finalBillingDetails.address = this.finalAddress;

      this.billingService.addBillingDetails(this.finalBillingDetails);

      this.snackBarService.success("Billing information saved");

      this.nextStep.emit(3);
    } else {
        this.snackBarService.error("Check the values");
    }
  }
}
