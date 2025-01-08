import { Component, computed, inject, signal } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { MatTableModule } from '@angular/material/table';
import { CartCounts } from '../../models/count.model';

@Component({
  selector: 'app-cart',
  imports: [MatTableModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cartService = inject(CartService);

  //table data
  displayedColumns: string[] = ['id', 'title', 'price'];
  dataSource = this.cartService.cart();

  total = computed(() => {
    let totalPrice = 0;

    this.cartService
      .cart()
      .forEach((item) => (totalPrice = totalPrice + item.price));

    return totalPrice;
  });
}
