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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CartAddComponent } from './components/cart-add/cart-add.component';
import { ProductServiceService } from './services/product-service.service';
import { AuthComponent } from './components/auth/auth.component';
import { MatSelectModule } from '@angular/material/select';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DisplayProductsComponent,
    NavbarComponent,
    CartAddComponent,
    AuthComponent,
    ProfileComponent

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
  ],
  providers: [ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
