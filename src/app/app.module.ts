import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DisplayProductsComponent } from './components/display-products/display-products.component';
import { HttpClientModule } from '@angular/common/http';
import { CartAddComponent } from './components/cart-add/cart-add.component';
import { ProductService } from './services/product/product.service';
import { AuthComponent } from './components/auth/auth.component';
import { MatSelectModule } from '@angular/material/select';
import { CartCheckoutComponent } from './components/cart-checkout/cart-checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './components/profile/profile.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './app.state';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { ProductEffects } from './services/product/state';
import { CartComponent } from './components/cart/cart.component';
import { BillingComponent } from './components/billing/billing.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { OrderCompletedComponent } from './components/order-completed/order-completed.component';
import { RouterState } from '@ngrx/router-store';
import { JwtModule } from '@auth0/angular-jwt';
import { MatDialogModule } from '@angular/material/dialog';
import { QrDialog } from './components/register/register.component';

export function tokenGetter() {
    return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    QrDialog,
    DisplayProductsComponent,
    NavbarComponent,
    CartAddComponent,
    AuthComponent,
    CartCheckoutComponent,
    ProfileComponent,
    CartComponent,
    BillingComponent,
    ShippingComponent,
    ErrorPageComponent,
    OrderCompletedComponent
  ],
  imports: [
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatGridListModule,
    MatSnackBarModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([
      ProductEffects.ProductEffects
    ]),
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal,
    }), 
    JwtModule.forRoot({
        config: {
            tokenGetter: tokenGetter,

            // WARN do not use wildcard in production
            // Set this to cloud address when deploying
            allowedDomains: ["localhost:8080"],

            // Set this for routes that do not send authorization 
            // in header
            //disallowedRoutes: []
            skipWhenExpired: false // we handle this explicitly
        },
    }) 
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
