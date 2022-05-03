import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartAddComponent } from './components/cart-add/cart-add.component';
import { DisplayProductsComponent } from './components/display-products/display-products.component';
import { AuthComponent } from './components/auth/auth.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { CartCheckoutComponent } from './components/cart-checkout/cart-checkout.component';
<<<<<<< Updated upstream
import { OrderCompletedComponent } from './components/order-completed/order-completed.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
=======
import { BillingComponent } from './components/billing/billing.component'
import { OrderCompletedComponent } from './components/order-completed/order-completed.component';
>>>>>>> Stashed changes

const routes: Routes = [
  { path: '', component: DisplayProductsComponent },
  { path:'profile', component: ProfileComponent },
  { path: 'products/:id', component: CartAddComponent },
  { path:'login', component: AuthComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'checkout', component: CartCheckoutComponent },
<<<<<<< Updated upstream
  { path: 'order', component: OrderCompletedComponent },
  { path: '**', component: ErrorPageComponent }, // Create a 404 Page
=======
  { path: 'order-success', component: OrderCompletedComponent},
  { path: '**', component: DisplayProductsComponent }, // Create a 404 Page
>>>>>>> Stashed changes
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
