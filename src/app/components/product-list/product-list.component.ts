import { Component, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = signal<Product[]>([]);

  async ngOnInit(){
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    this.products.set(data);
  }
}
