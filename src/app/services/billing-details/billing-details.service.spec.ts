import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { BillingDetailsService } from './billing-details.service';

describe('BillingDetailsService', () => {
  let service: BillingDetailsService;
  let store: any;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule],
      providers: [ provideMockStore({}) ]
    });
    service = TestBed.inject(BillingDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
