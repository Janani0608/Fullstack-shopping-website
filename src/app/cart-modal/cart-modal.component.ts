import { Component, Input, OnInit } from '@angular/core';
import { emptyCart } from '../constants/constants';
import { ShirtsService } from '../services/shirts.service';
import { Shirt, CartState } from "../interfaces/interfaces";

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.sass']
})
export class CartModalComponent implements OnInit {
  
  display: number = 0;
  cart:CartState = emptyCart;
  
  constructor(private service:ShirtsService) { 
    this.service.show.subscribe(
      (data) => {
        this.display = data;
      }
    );
    this.service.cartObservable.subscribe(
      (data) => {
        this.cart = data
      }
    )
    this.service.updateCart();
  }

  ngOnInit(): void {
    let input = <HTMLInputElement> document.getElementById("quantityBox");
    input.value = this.cart.quantity.toString() || "0";
  }

  close(){
    this.service.hideCart();
  }

  add(item:Shirt) {
    this.service.addToCart(item)
  }

  remove(item:Shirt) {
    this.service.removeFromCart(item);
  }

  clear() {
    this.service.clearCart();
  }

}
