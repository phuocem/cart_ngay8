import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-cart-card',
  standalone: true,
  imports: [],
  templateUrl: './cart-card.component.html',
  styleUrl: './cart-card.component.scss'
})
export class CartCardComponent {
  @Input() cartName!: string;
  @Input() cartPrice!: number;
  @Input() cartImage!: string;
  @Input() cartquantity!: number;
}
