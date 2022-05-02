import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { DisplayProductsComponent } from './display-products.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ProductService } from '../../services/product/product.service';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';


describe('DisplayProductsComponent', () => {
  let component: DisplayProductsComponent;
  let fixture: ComponentFixture<DisplayProductsComponent>;
  let productService: ProductService;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule, MatCardModule, MatGridListModule ],
      declarations: [ DisplayProductsComponent ],
      providers: [ provideMockStore({})]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
