import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddressServiceService } from 'src/app/services/address-service.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let mockAddressSerivce: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ ProfileComponent ],
      providers: [AddressServiceService]
        //{provide: AddressServiceService, useValue: mockAddressSerivce}
      //]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    mockAddressSerivce = TestBed.inject(AddressServiceService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
