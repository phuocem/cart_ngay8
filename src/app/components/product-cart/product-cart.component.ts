import {Component, EventEmitter, Input, input, Output} from '@angular/core';
import {ProductModel} from "../../models/product.model";
import {StoreService} from "../../services/store.service";

@Component({
  selector: 'app-product-cart',
  standalone: true,
  imports: [],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.scss'
})
export class ProductCartComponent {
  @Input() product !: ProductModel;
  constructor(public storeService: StoreService) {
  }


}
