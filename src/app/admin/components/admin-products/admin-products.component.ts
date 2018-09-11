import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from '../../../shared/services/product.service';
import {Subscription} from 'rxjs/Subscription';
import {Product} from '../../../shared/models/product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  product: Product [];

  filteredProduct: any[];
  subscription: Subscription;

  constructor(private productService: ProductService) {
    this.subscription = productService.getAll().subscribe(products => this.filteredProduct = this.product = products);
  }

  ngOnInit() {
  }

  filter(query: string) {
    this.filteredProduct = (query) ? this.product.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) : this.product;

  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

}
