import { Component, Input, OnInit } from '@angular/core';
import { emptyCart } from '../constants/constants';
import { CartState, Shirt, ShirtsService } from '../services/shirts.service';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.sass']
})
export class CartModalComponent implements OnInit {
  display: number = 0;

  @Input() cart_:CartState = emptyCart
  
  constructor(private service:ShirtsService) { 
    this.service.updateCart();
    this.service.show.subscribe(
      (data) => {
        this.display = data;
      }
    );
  }

  ngOnInit(): void {
    let input = <HTMLInputElement> document.getElementById("quantityBox");
    input.value = this.cart_.quantity.toString() || "0";
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

}
