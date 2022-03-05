import { Component, OnInit } from '@angular/core';
import { ShirtsService } from '../services/shirts.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.sass']
})
export class BodyComponent implements OnInit {

  constructor(private service: ShirtsService) { 
  /*this.service.getShirts().subscribe({
      next: data =>{
        this.shirts=data
      }});
      console.log(this.shirts)*/
      this.shirts = this.service.getShirts();
  }

  ngOnInit(): void {
  }
  title = "List of available shirts";
  shirts;

}
