import {Component, Input, OnInit} from '@angular/core';
import {ShoppingCart} from '../../shared/models/shopping-cart';

@Component({
  selector: 'shopping-cart-summury',
  templateUrl: './shopping-cart-summury.component.html',
  styleUrls: ['./shopping-cart-summury.component.css']
})
export class ShoppingCartSummaryComponent {
  @Input('cart') cart: ShoppingCart;

}
