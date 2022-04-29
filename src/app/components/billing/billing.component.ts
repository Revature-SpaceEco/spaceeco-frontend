import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BillingDetails } from 'src/app/models/BillingDetails';
import { BillingDetailsService } from 'src/app/services/billing-details/billing-details.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Address } from 'src/app/models/Address';

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

  constructor(private fb: FormBuilder, private billingService: BillingDetailsService) { }

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
    })
  }

  proceedToShipping() {
    this.nextStep.emit(3);
    const billingAddress = this.billingAddressForm.value;
    const billingInfo = this.billingForm.value;

    // map billing addess to addess model
    // finalAddress.addressLineOne: string,
    // addressLineTwo?: string,
    // city: string,
    // state: string,
    // country: string,
    // zip: string,
    // solarSystem: string,
    // planet: string

    //billing info and to billing details, add in address model

    // this.billingService.addBillingDetails(finalBillingDetails);

  }

}
