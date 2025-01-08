import { Component, input } from '@angular/core';
import { Product } from '../../models/product.model';
import { ButtonComponent } from "../button/button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [ButtonComponent, CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  data = input.required<Product>();

  addToCart():void{
    console.log("card component button.")
  }
}
