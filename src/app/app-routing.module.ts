import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartAddComponent } from './components/cart-add/cart-add.component';
import { DisplayProductsComponent } from './components/display-products/display-products.component';

const routes: Routes = [
  {path: 'cart-add', component: CartAddComponent},
  {path: '', component: DisplayProductsComponent},
  {path: 'products/:id', component : DisplayProductsComponent},
  {path: 'products/:id', component: CartAddComponent}
  // {path: 'cart-add/:id', component: CartAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
