import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BillingDetails } from 'src/app/models/BillingDetails';
import { BillingDetailsService } from 'src/app/services/billing-details/billing-details.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  
  @Output() nextStep = new EventEmitter<number>();

  billingDetails: BillingDetails;

  constructor(private billingDetailsService: BillingDetailsService) { }

  ngOnInit(): void {
  }

  proceedToShipping() {
    this.nextStep.emit(3);
  }

}
