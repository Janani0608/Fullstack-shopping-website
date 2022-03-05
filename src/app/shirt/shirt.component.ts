import { Component, OnInit, Input } from '@angular/core';
import { Shirt, ShirtsService } from '../services/shirts.service';

@Component({
  selector: 'app-shirt',
  templateUrl: './shirt.component.html',
  styleUrls: ['./shirt.component.sass']
})
export class ShirtComponent implements OnInit {
  
  @Input() shirtDetails:Shirt = {
    '_id': "",
    'id': 0,
    'colour': "",
    'picture': "",
    'price': 0,
    'size': "",
    'name': "",
    'quantity': 0
  }

  constructor(private service: ShirtsService) { 
  }

  ngOnInit(): void {
    
  }

  addToCart(shirt: Shirt) {
    console.log("Adding shirt" + shirt+ "to the cart")
    this.service.addToCart(shirt);
  }

  

}
