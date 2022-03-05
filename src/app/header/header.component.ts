import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Shirt, ShirtsService } from '../services/shirts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private service: ShirtsService) {
  }

  ngOnInit(): void {
    
  }

}
