import { Component, inject, input } from '@angular/core';
import { Product } from '../../models/product.model';
import { ButtonComponent } from "../button/button.component";
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [ButtonComponent, CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  data = input.required<Product>();

  cartService = inject(CartService);

  addToCart(product:Product):void{
    this.cartService.addToCart(product);
  }
}
