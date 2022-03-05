import { Component, OnInit } from '@angular/core';
import { ShirtsService } from '../services/shirts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

  

  constructor(private service: ShirtsService) {
    this.quantity = this.service.total;
  }

  ngOnInit(): void {
  }
  quantity;

  openModal(){
    this.service.showCart();
  }
 

}
