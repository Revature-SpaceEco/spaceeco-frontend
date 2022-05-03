import { TestBed } from '@angular/core/testing';

import { AddressServiceService } from './address-service.service';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import  {Address} from '../../models/Address';

describe('AddressServiceService', () => {
  let URL = 'http://localhost:8080';
  let service: AddressServiceService;
  let httpTestingController: HttpTestingController;
  let serviceSpy :any;
  let spyObject:any;
  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AddressServiceService]
    });
    service = TestBed.inject(AddressServiceService);

    httpTestingController = TestBed.inject(HttpTestingController);
    serviceSpy = spyOn(service, 'getAddress').and.callThrough();

    spyObject = spyOn(localStorage, 'getItem').and.callFake( (key:string):string =>  "1");

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
