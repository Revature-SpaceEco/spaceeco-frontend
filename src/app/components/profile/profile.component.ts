import { Component, OnInit } from '@angular/core';
import { Address } from '../../models/Address';
import { AddressServiceService } from '../../services/address/address-service.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  //address!: Observable<Address> = this.addressService.getAddress().subscribe()
  address!: Address;
  constructor(
    private addressService: AddressServiceService
  ) { }

  getAddress() {
    /*let obs: Observable<Address> = this.addressService.getAddress();

    obs.subscribe({
      "next": (data) => {
        this.address = data;
        console.log("Got proper respone " + this.address.addressLineOne);
      }
    })*/
    this.addressService.getAddress().subscribe({
      next: (data) => {
        //this will be where the response body fill out our HTML objects
        this.address = data;
        console.log("Got proper respone " + this.address.addressLineOne);

      },
      error: (err: any) => {
        console.log("Did not get address from backend" + err);
      }
    })
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
 
  }

  ngOnInit(): void {
    this.getAddress();
    // this.addressService.getOrder();
  }

}
