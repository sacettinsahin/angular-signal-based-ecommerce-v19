import { CommonModule } from '@angular/common';
import { Component,input, computed, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  label = input.required<string>();
  type = input<'primary' | 'secondary'>("primary");
  btnMethod = output<void>();
  class = input<string>('');

  public handleMethod():void{
    this.btnMethod.emit();
  }
}
