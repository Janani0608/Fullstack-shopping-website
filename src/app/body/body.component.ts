import { Component, OnInit } from '@angular/core';
import { ShirtsService, Shirt } from '../services/shirts.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.sass']
})
export class BodyComponent implements OnInit {
  
  shirts:Shirt[] = [];

  title = "List of available shirts";

  constructor(private service: ShirtsService) {
    
  }

  ngOnInit(): void {
    this.service.getShirts().subscribe(
      (data) => {
        this.shirts = data;
      }
    );
  }
  

}
