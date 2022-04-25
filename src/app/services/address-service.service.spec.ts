import { TestBed } from '@angular/core/testing';

import { AddressServiceService } from './address-service.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('AddressServiceService', () => {
  let URL = 'http://localhost:8080';
  let service: AddressServiceService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AddressServiceService
      ]
    });
    service = TestBed.inject(AddressServiceService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe("get address", () => {
    /*
    it('should call the correct url', () => {
      service.getAddress().subscribe(address => {
        expect(address.id).toBe(1);
      });

      const req = httpTestingController.expectOne(URL + '/address/users/1');

      req.flush({id: 1,
      addressLineOne: "9194 North College Ave",
      addressLineTwo: "512 South Pennsylvania St",
      city: "Grand Haven",
      state: "MI",
      country: "United States",
      zip: "49417",
      solarSystem: "solar system",
      planet: "earth"});
      expect(req.request.method).toBe('GET');
      httpTestingController.verify();
    })*/
  })
  
});
