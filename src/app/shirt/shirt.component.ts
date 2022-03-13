import { Component, OnInit, Input } from '@angular/core';
import { ShirtsService } from '../services/shirts.service';
import { Shirt } from "../interfaces/interfaces";
import { emptyShirt } from "../constants/constants";

@Component({
  selector: 'app-shirt',
  templateUrl: './shirt.component.html',
  styleUrls: ['./shirt.component.sass']
})
export class ShirtComponent implements OnInit {
  
  @Input() shirtDetails:Shirt = emptyShirt;

  constructor(private service: ShirtsService) { 
  }

  ngOnInit(): void {
    
  }

  addToCart(shirt: Shirt) {
    this.service.addToCart(shirt);
  }

  

}
