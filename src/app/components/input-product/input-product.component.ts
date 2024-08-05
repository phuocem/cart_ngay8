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
  newProduct: ProductModel = {
    name: '',
    price: 0,
    inventoryNumber: 0,
    img: '',
    id: 0
  };

  constructor(public storeService: StoreService) {}

  addProduct() {
    if (this.newProduct.name && this.newProduct.price > 0 && this.newProduct.inventoryNumber >= 0 && this.newProduct.img) {
      this.storeService.addProduct(this.newProduct);
      this.resetForm();
    } else {
      alert('NHẬP ĐẦY ĐỦ HỘ EM CÁI!!!');
    }
  }

  resetForm() {
    this.newProduct = {
      name: '',
      price: 0,
      inventoryNumber: 0,
      img: '',
      id: 0
    };
  }
}
