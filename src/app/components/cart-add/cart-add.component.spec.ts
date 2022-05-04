import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CartAddComponent } from './cart-add.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductService } from '../../services/product/product.service';
import { HttpClient } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';
import { provideMockStore } from '@ngrx/store/testing';


describe('CartAddComponent', () => {
  let component: CartAddComponent;
  let fixture: ComponentFixture<CartAddComponent>;
  let service: ProductService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule, MatSnackBarModule],
      declarations: [ CartAddComponent ],
      providers: [ProductService, {provide:HttpClient}, SnackbarService, provideMockStore({})],

    })
    .compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(CartAddComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ProductService);
    //spyOn(ProductServiceService, 'getProductById')
    fixture.detectChanges();
  });

   it('should create', () => {
     expect(component).toBeDefined();
   });

   describe('ngInit', () => {
    it('should call getCurrentProduct on component init', () => {
      const spy = spyOn(service, 'getCurrentProduct');
      component.ngOnInit();

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
   

});
