import { Component, Input, OnInit } from '@angular/core';
import { Shirt, ShirtsService } from '../services/shirts.service';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.sass']
})
export class CartModalComponent implements OnInit {

  constructor(private service:ShirtsService) { 
    this.cart = this.service.cartObservable;
    this.quantity = this.service.total;
    this.display = this.service.show;
    this.totalPrice = this.service.totalPrice;
  }

  ngOnInit(): void {
    let input = <HTMLInputElement> document.getElementById("quantityBox");
    input.value = this.quantity.toString();
    
  }
  cart;
  quantity;
  display;
  totalPrice;

  close(){
    this.service.hideCart();
  }

  add(item:Shirt) {
    this.service.addToCart(item)
    console.log(this.cart)
  }

  remove(item:Shirt) {
    this.service.removeFromCart(item);
  }



}
