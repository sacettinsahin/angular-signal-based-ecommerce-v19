import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([]);

  addToCart(product:Product):void{
    this.cart.update((prev)=>[...prev, product])
    console.log(this.cart())
  }

  constructor() { }
}
