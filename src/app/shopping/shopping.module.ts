import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderSuccessComponent} from './order-success/order-success.component';
import {CheckOutComponent} from './check-out/check-out.component';
import {ShoppingCartSummaryComponent} from './shopping-cart-summury/shopping-cart-summury.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {MyOrdersComponent} from './my-orders/my-orders.component';
import {ShippingFormComponent} from './shipping-form/shipping-form.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AuthGuard} from '../shared/services/auth-guard.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild([
      {path: 'shopping-cart', component: ShoppingCartComponent},
      {path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard]},
      {path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuard]},
      {path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard]},
    ])
  ],
  declarations: [
    OrderSuccessComponent,
    CheckOutComponent,
    ShoppingCartSummaryComponent,
    ShoppingCartComponent,
    MyOrdersComponent,
    ShippingFormComponent
  ]
})
export class ShoppingModule { }

