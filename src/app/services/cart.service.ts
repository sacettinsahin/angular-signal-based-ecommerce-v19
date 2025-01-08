import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<Product[]>([]);

  addToCart(product: Product): void {
    const isProductExist = this.cart().find((item) => item.id === product.id);
    if (!isProductExist) {
      this.cart.update((prev) => [...prev, product]);
    }
  }

  deleteFromCart(productId: number): void {
    this.cart.update((prev) => prev.filter((item) => item.id !== productId));
  }

  constructor() {}
}
