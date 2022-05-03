import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { BillingDetailsService } from '../../services/billing-details/billing-details.service';
import { SnackbarService } from '../../services/snackbar/snackbar.service';

import { BillingComponent } from './billing.component';

describe('BillingComponent', () => {
  let component: BillingComponent;
  let fixture: ComponentFixture<BillingComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, MatSnackBarModule, MatIconModule, FormsModule, ReactiveFormsModule ],
      declarations: [ BillingComponent,  ],
      providers: [FormBuilder, SnackbarService, BillingDetailsService, provideMockStore({}) ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
