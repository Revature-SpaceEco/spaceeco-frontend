import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartAddComponent } from './cart-add/cart-add.component';
import { DisplayProductsComponent } from './components/display-products/display-products.component';

const routes: Routes = [
  {path: 'cart-add', component: CartAddComponent},
  {path: '', component: DisplayProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
