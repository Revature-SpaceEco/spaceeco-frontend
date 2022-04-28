import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/models/Address';
import { AddressServiceService } from '../../services/address/address-service.service';
import { MatCard } from '@angular/material/card';


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

  getAddress(){
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
  

  ngOnInit(): void {
    this.getAddress();
  }

}
