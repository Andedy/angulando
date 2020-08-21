import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CartPageComponent } from './pages/store/cart-page/cart-page.component';
import { ProductsPageComponent } from './pages/store/products-page/products-page.component';
import { PetsPageComponent } from './pages/store/pets-page/pets-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FramePageComponent } from './pages/master/frame.page';
import { ProductCardComponent } from './components/store/product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    ResetPasswordPageComponent,
    PetsPageComponent,
    ProductsPageComponent,
    PetsPageComponent,
    CartPageComponent,
    FramePageComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }