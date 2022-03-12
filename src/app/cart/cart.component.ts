import { Component, OnInit } from '@angular/core';
import { emptyCart } from '../constants/constants';
import { ShirtsService, Shirt, CartState} from '../services/shirts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

  cart: CartState = JSON.parse(window.localStorage.getItem('cart')|| JSON.stringify(emptyCart));
  
  constructor(private service: ShirtsService) {
    this.service.updateCart();
    this.service.cartObservable.subscribe(
      (data) => {
        this.cart = data;
      }
    )
  }

  ngOnInit(): void {
    
  }

  openModal(){
    this.service.showCart();
  }
 

}
