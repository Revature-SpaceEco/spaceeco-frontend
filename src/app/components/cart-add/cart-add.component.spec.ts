import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CartAddComponent } from './cart-add.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductServiceService } from '../../services/product/product-service.service';
import { HttpClient } from '@angular/common/http';




describe('CartAddComponent', () => {
  let component: CartAddComponent;
  let fixture: ComponentFixture<CartAddComponent>;
  let service: ProductServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule],
      declarations: [ CartAddComponent ],
      providers: [ProductServiceService, {provide:HttpClient}]
    })
    .compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(CartAddComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ProductServiceService);
    //spyOn(ProductServiceService, 'getProductById')
    fixture.detectChanges();
  });
/*
  it('should create', () => {
    expect(component).toBeDefined();
  });
  */
});
