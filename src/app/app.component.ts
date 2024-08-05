import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {ProductCartComponent} from "./components/product-cart/product-cart.component";
import {ProductModel} from "./models/product.model";
import {StoreService} from "./services/store.service";
import {InputProductComponent} from "./components/input-product/input-product.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ProductCartComponent, InputProductComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cart_project';


  constructor(public  storeService:StoreService) {
    console.log(this.storeService.products);

  }
}




// let product = this.products[item];
// let cartItem = this.cart.find(item => item.id === product.id);
// if (this.cart) {
//   if (product.inventoryNumber > 0) {
//     cartItem.quantity += 1;
//     product.inventoryNumber -= 1;
//   }
// } else {
//   if (product.inventoryNumber > 0) {
//     this.cart.push({
//       id: product.id,
//       img: product.img,
//       name: product.name,
//       price: product.price,
//       quantity: 1
//     });
//     product.inventoryNumber -= 1;
//   }
//     }
//   }
// }
// totalAmount: number = 0;


//   addToCart(index: number) {
//     let product = this.products[index];
//     let cartItem = this.cart.find(item => item.id === product.id);
//

//     this.updateTotalAmount();
//   }
//
//   removeFromCart(index: number) {
//     let  cartItem = this.cart[index];
//     let  product = this.products.find(p => p.id === cartItem.id);
//
//     if (cartItem) {
//       if (cartItem.quantity > 1) {
//         cartItem.quantity -= 1;
//         if (product) {
//           product.inventoryNumber += 1;
//         }
//       } else {
//         this.cart.splice(index, 1);
//         if (product) {
//           product.inventoryNumber += 1;
//         }
//       }
//     }
//     this.updateTotalAmount();
//   }
//
//   updateTotalAmount() {
//     this.totalAmount = this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
//   }
//
//   checkout() {
//     if (this.cart.length > 0) {
//       alert("Thanh toán thành công: " + this.totalAmount + ".000 VND");
//       this.cart = [];
//       this.totalAmount = 0;
//     } else {
//       alert("Giỏ hàng trống");
//     }
//   }
// }
