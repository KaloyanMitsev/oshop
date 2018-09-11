import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {RouterModule} from '@angular/router';
import {SharedModule} from './shared/shared.module';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './core/login/login.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import {AdminModule} from './admin/admin.module';
import {ShoppingModule} from './shopping/shopping.module';
import {CoreModule} from './core/core.module';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductFilterComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AdminModule,
    ShoppingModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
      {path: '', component: ProductsComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'login', component: LoginComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
