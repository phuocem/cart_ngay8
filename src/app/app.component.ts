import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cart_project';

  products = [
    { img: '../assets/ao.png', name: "Áo", inventoryNumber: 20, price: 14, id: 1 },
    { img: '../assets/quan.png', name: "Quần", inventoryNumber: 40, price: 13, id: 2 },
    { img: '../assets/giay.png', name: "Giày", inventoryNumber: 10, price: 90, id: 3 },
    { img: '../assets/gangtay.png', name: "Găng tay", inventoryNumber: 36, price: 30.000, id: 4 },
    { img: '../assets/mu.png', name: "Mũ", inventoryNumber: 4, price: 10.000, id: 5 },
  ];

  cart: any[] = [];
  totalAmount: number = 0;

  constructor() {
    this.updateTotalAmount();
  }

  addToCart(index: number) {
    const product = this.products[index];
    let cartItem = this.cart.find(item => item.id === product.id);

    if (cartItem) {
      if (product.inventoryNumber > 0) {
        cartItem.quantity += 1;
        product.inventoryNumber -= 1;
      }
    } else {
      if (product.inventoryNumber > 0) {
        this.cart.push({
          id: product.id,
          img: product.img,
          name: product.name,
          price: product.price,
          quantity: 1
        });
        product.inventoryNumber -= 1;
      }
    }
    this.updateTotalAmount();
  }

  removeFromCart(index: number) {
    const cartItem = this.cart[index];
    const product = this.products.find(p => p.id === cartItem.id);

    if (cartItem) {
      if (cartItem.quantity > 1) {
        cartItem.quantity -= 1;
        if (product) {
          product.inventoryNumber += 1;
        }
      } else {
        this.cart.splice(index, 1);
        if (product) {
          product.inventoryNumber += 1;
        }
      }
    }
    this.updateTotalAmount();
  }

  updateTotalAmount() {
    this.totalAmount = this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  checkout() {
    if (this.cart.length > 0) {
      alert("Thanh toán thành công: " + this.totalAmount + ".000 VND");
      this.cart = [];
      this.totalAmount = 0;
    } else {
      alert("Giỏ hàng trống");
    }
  }
}
