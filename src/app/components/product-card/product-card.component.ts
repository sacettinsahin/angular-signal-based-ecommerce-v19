import { Component, input } from '@angular/core';
import { Product } from '../../models/product.model';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-product-card',
  imports: [ButtonComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  data = input.required<Product>();

  addToCart():void{
    console.log("card component button.")
  }
}
