import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddressServiceService } from '../../services/address/address-service.service';
import {HttpClientTestingModule } from "@angular/common/http/testing";
import { ProfileComponent } from './profile.component';
import { of } from 'rxjs';
import { Address } from 'src/app/models/Address';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let getAddressSpy: { calls: { any: () => any; }; };
  let planetEl: any;
  let address: Address;
  beforeEach(async () => {
    address= {
      id: 1,
      addressLineOne: "9194 North College Ave",
      addressLineTwo: "512 South Pennsylvania St",
      city: "Grand Haven",
      state: "MI",
      country: "United States",
      zip: "49417",
      solarSystem: "solar system",
      planet: "earth"
    };

    let mockAddressSerivce = jasmine.createSpyObj('AddressServiceService', ['getAddress']);

    getAddressSpy = mockAddressSerivce.getAddress.and.returnValue(of(address))
    await TestBed.configureTestingModule({
      imports: [MatCardModule, MatFormFieldModule, HttpClientTestingModule],
      declarations: [ ProfileComponent ],
      providers: [{provide: AddressServiceService, useValue: mockAddressSerivce}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show address after component initialized', () =>{
    planetEl = fixture.nativeElement.querySelector('.planet');
    expect(planetEl.textContent).toContain(address.planet);
    expect(getAddressSpy.calls.any()).withContext('getAddress called').toBe(true);
  });

  describe('ngInit', () => {
    it('should call getUser on component init', () => {
      const spy = spyOn(component, 'getUser');
      component.ngOnInit();

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

});
