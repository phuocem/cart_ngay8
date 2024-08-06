import { Component } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { FormsModule } from '@angular/forms';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-input-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-product.component.html',
  styleUrls: ['./input-product.component.scss']
})
export class InputProductComponent {
  constructor(public storeService: StoreService) {}
 
}
