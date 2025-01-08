import { Component, computed, inject, signal } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { MatTableModule } from '@angular/material/table';
import { CartCounts } from '../../models/count.model';
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: 'app-cart',
  imports: [MatTableModule, ButtonComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cartService = inject(CartService);

  //table data
  displayedColumns: string[] = ['id', 'title', 'price', 'action'];

  //total price
  total = computed(() => {
    let totalPrice = 0;
    this.cartService
      .cart()
      .forEach((item) => (totalPrice = totalPrice + item.price));
    return totalPrice;
  });
}
