import { Component, OnInit } from '@angular/core';
import { emptyCart } from '../constants/constants';
import { ShirtsService } from '../services/shirts.service';
import { Shirt, CartState } from "../interfaces/interfaces";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

  cart: Shirt[] = [];
  quantity: number = 0;
  price: number = 0;

  constructor(private service: ShirtsService) {
    this.service.cartObservable.subscribe(
      (data) => {
        this.cart = data.cart;
        this.quantity = data.quantity;
        this.price = data.price;
      }
    )
    this.service.updateCart();
  }

  ngOnInit(): void {
    this.service.updateCart();
  }

  openModal(){
    this.service.showCart();
  }
 

}
