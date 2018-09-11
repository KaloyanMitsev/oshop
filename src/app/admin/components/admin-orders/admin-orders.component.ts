import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../../shared/services/order.service';
import {UserService} from '../../../shared/services/user.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  orders$;

  constructor(private orderService: OrderService, private userService: UserService) {
  }

  async ngOnInit() {
    this.orders$ = await this.orderService.getOrders();
  }

  getUserName(userId: string) {
    const user = this.userService.get(userId);
  }
}
