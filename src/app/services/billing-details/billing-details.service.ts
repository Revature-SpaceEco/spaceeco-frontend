import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BillingDetails } from '../../models/BillingDetails';
import { environment } from '../../../environments/environment';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { BillingActions, BillingSelectors } from './state';


const URL = environment.BACKEND_URL;

@Injectable({
  providedIn: 'root'
})
export class BillingDetailsService {
  jwt = localStorage.getItem("jwt");
  userId = 1; //placeholder, need to use state
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + this.jwt
    })
  };

  constructor(
    private http: HttpClient,
    private store: Store<AppState>
    ) { }

  // post and get

  addBillingDetails(billing: BillingDetails) {
    //return this.http.post<BillingDetails>(URL + "users/" + this.userId + "/billing", billing);
    this.store.dispatch(BillingActions.addBillingDetails({billingDetails: billing}));
  }

  getBillingDetails() {
    //return this.http.get<BillingDetails>(URL + "users/" + this.userId + "/billing" + billingId);
    return this.store.select(BillingSelectors.getBilling);
  }

  clearBillingDetails(){
    this.store.dispatch(BillingActions.clearBillingDetails());
  }

}
