import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DisplayProductsComponent } from './components/display-products/display-products.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CartAddComponent } from './components/cart-add/cart-add.component';
import { ProductServiceService } from './services/product-service.service';

@NgModule({
  declarations: [
    AppComponent,
    DisplayProductsComponent,
    NavbarComponent,
    CartAddComponent,

  ],
  imports: [
    FlexLayoutModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    BrowserAnimationsModule

  ],
  providers: [ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
