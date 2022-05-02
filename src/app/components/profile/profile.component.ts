import { Component, OnInit } from '@angular/core';
import { Address } from '../../models/Address';
import { AddressServiceService } from '../../services/address/address-service.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user/user.service';
import { BillingDetails } from 'src/app/models/BillingDetails';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId= localStorage.getItem('userId');
  jwt = localStorage.getItem("jwt");
  user!: User;
  userRole: String;
  address!: Address;
  primaryBilling!: BillingDetails;
  
  constructor(
    private addressService: AddressServiceService,
    private userService: UserService
  ) { }

  getAddress() {

    this.addressService.getAddress().subscribe({
      next: (data) => {
        //this will be where the response body fill out our HTML objects
        this.address = data;
      },
      error: (err: any) => {
        console.log("Did not get address from backend" + err);
      }
    })
  }

  getUser(){
    this.userService.getUserById().subscribe({
      next: (data) => {
        this.user = data;
        this.userRole = this.formatRole(this.user.userRole.role);
        this.primaryBilling = data.primaryBilling;
      },
      error: (err: any) => {
        console.log("Did not get address from backend" + err);
      }
    })
  }

  formatRole(role: String){
    if(role === "ROLE_BUYER"){
      return "Buyer";
    } else if (role === "ROLE_SELLER") {
      return "Seller";
    } else if (role === "ROLE_ADMIN"){
      return "Admin"
    }
    else {
      return "Invalid";
    }
  }

  onSubmit(form: NgForm){
    const addressLineOne = form.value.addressLineOne;
    const addressLineTwo = form.value.addressLineTwo;
    const city = form.value.city;
    const state = form.value.state;
    const country = form. value.country;
    const zip = form.value.zip;
    const solarSystem = form.value.solarSystem;
    const planet = form.value.planet;
    console.log("address form addressLineOne" + addressLineOne)
    let residence = {addressLineOne: addressLineOne, addressLineTwo: addressLineTwo, 
      city: city, state:state, country:country, zip: zip,
      solarSystem: solarSystem, planet:planet};
    this.addressService.postAddress(residence).subscribe({
      next: (data) => {
        this.address = data;
      }
    }); 
  }

  ngOnInit(): void {
    this.getAddress();
    this.getUser();

    // this.addressService.getOrder();
  }

}
