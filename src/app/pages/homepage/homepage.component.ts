import { Component, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductListComponent } from "../../components/product-list/product-list.component";

@Component({
  selector: 'app-homepage',
  imports: [ProductListComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {

}
