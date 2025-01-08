import { Component, computed, inject, signal } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  cartService = inject(CartService);

  btnText = computed(()=>{
    return `Cart(${this.cartService.cart().length})`
  })

  public showCart():void{
    console.log("show cart.")
  }
}
