import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from '../shared/services/product.service';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../shared/models/product';
import 'rxjs/add/operator/switchMap';
import {ShoppingCartService} from '../shared/services/shopping-cart.service';
import {Observable} from 'rxjs';
import {ShoppingCart} from '../shared/models/shopping-cart';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;
  filteredProducts: Product[] = [];
  category;
  cart$: Observable<ShoppingCart>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService,
  ) {
  }

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
    this.populateProducts();
  }

  private populateProducts() {
    this.productService.getAll()
      .switchMap(product => {
        this.products = product;
        return this.route.queryParamMap;
      })
      .subscribe(params => {
        this.category = params.get('category');
        this.applyFiltrt();
      });
  }

  private applyFiltrt() {
    this.filteredProducts = (this.category) ? this.products.filter(p => p.category === this.category) : this.products;
  }
}
