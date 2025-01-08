import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { HomepageComponent } from "./pages/homepage/homepage.component";
import { ProductListComponent } from "./components/product-list/product-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-signal-based-ecommerce-v19';
}
