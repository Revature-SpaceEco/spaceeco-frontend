import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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
<<<<<<< HEAD
import { CartAddComponent } from './components/cart-add/cart-add.component';
import { ProductServiceService } from './services/product-service.service';
=======
import { AuthComponent } from './components/auth/auth.component';
>>>>>>> main-dev

@NgModule({
  declarations: [
    AppComponent,
    DisplayProductsComponent,
    NavbarComponent,
<<<<<<< HEAD
    CartAddComponent,
=======
    AuthComponent,
>>>>>>> main-dev

  ],
  imports: [
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
<<<<<<< HEAD
    BrowserAnimationsModule

=======
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
>>>>>>> main-dev
  ],
  providers: [ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
