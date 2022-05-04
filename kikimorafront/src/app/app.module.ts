import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductItemComponent } from './product-item/product-item.component';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { CategoryListComponent } from './category-list/category-list.component';
import { AlbumsComponent } from './albums/albums.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    BrowserModule,
    ShareButtonsModule,
    ShareIconsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: CategoryListComponent },
      // { path: 'categories/:categoryId', component: CategoryComponent },
      { path: 'categories/:categoryId', component: ProductListComponent },
      { path: 'cart', component: CartComponent },
      { path: 'product-item/:productId', component: ProductItemComponent },
      {path: 'aboutus', component:AboutusComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    CartComponent,
    ProductItemComponent,
    CategoryListComponent,
    AlbumsComponent,
    AboutusComponent,
    LoginComponent,
    RegisterComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
