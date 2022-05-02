import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { BillingDetailsService } from './billing-details.service';

describe('BillingDetailsService', () => {
  let service: BillingDetailsService;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule],
    });
    service = TestBed.inject(BillingDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
