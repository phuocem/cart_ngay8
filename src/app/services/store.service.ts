import { Injectable } from '@angular/core';
import {ProductModel} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  constructor() {
  }

  products = [
    {img: '../assets/ao.png', name: "Áo", inventoryNumber: 20, price: 14, id: 1},
    {img: '../assets/quan.png', name: "Quần", inventoryNumber: 40, price: 13, id: 2},
    {img: '../assets/giay.png', name: "Giày", inventoryNumber: 10, price: 90, id: 3},
    {img: '../assets/gangtay.png', name: "Găng tay", inventoryNumber: 36, price: 30.000, id: 4},
    {img: '../assets/mu.png', name: "Mũ", inventoryNumber: 4, price: 10.000, id: 5},
    {img: '../assets/kinh.png', name: "Kính", inventoryNumber: 3, price: 20.000, id: 6},
    {img: '../assets/thatlung.png', name: "Thắt lưng", inventoryNumber: 6, price: 50.000, id: 7},
    {img: '../assets/bongtai.png', name: "bông tai", inventoryNumber: 10, price: 70.000, id: 8},
    {img: '../assets/vali.png', name: "Vali", inventoryNumber: 8, price: 100.000, id: 9},
  ];
  cart: any[] = [];
  totalAmount: number = 0;

  addToCart(item: any) {
    let findIndex = this.cart.findIndex((products) => products.id === item.id);
    let product = this.products.findIndex((products) => products.id === item.id);
    if (this.products[product].inventoryNumber == 0) {
      {
        return alert(this.products[product].name + " hết hàng");
      }
    }
    if (findIndex !== -1) {
      this.cart[findIndex].quantity += 1;
      this.products[product].inventoryNumber -= 1;
    } else {
      this.products[product].inventoryNumber -= 1;
      this.cart.push(item);
    }
    this.updateTotalAmount();
  }

  removeFromCart(item: any) {
    let cartItem = this.cart[item];
    let product = this.products.find(p => p.id === cartItem.id);

    if (cartItem) {
      if (cartItem.quantity > 1) {
        cartItem.quantity -= 1;
        if (product) {
          product.inventoryNumber += 1;
        }
      } else {
        this.cart.splice(item, 1);
        if (product) {
          product.inventoryNumber += 1;
        }
      }
    }
    this.updateTotalAmount();
  }

  updateTotalAmount() {
    // this.totalAmount=0;
    this.totalAmount = this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  }


  checkout() {
    this.cart = [];
    this.totalAmount = 0;
  }

  addProducts(product: ProductModel) {
    this.products.push(product);
    product.id = this.products.length + 1;

  }
  newProduct: ProductModel = {
    name: '',
    price: 0,
    inventoryNumber: 0,
    img: '',
    id: 0
  };



  addProduct() {
    if (this.newProduct.name && this.newProduct.price > 0 && this.newProduct.inventoryNumber >= 0 && this.newProduct.img) {
      this.addProducts(this.newProduct);
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



