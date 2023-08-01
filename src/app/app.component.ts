import { Component, OnInit } from '@angular/core';
import { Cart } from './models/cart.model';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  template: `
  <app-header></app-header>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Duy Huynh Store';
  cart: Cart = {items : []}
  
  constructor(private cartService: CartService){

  }

  ngOnInit(){
      this.cartService.cart.subscribe((_cart)=>{
        this.cart = _cart;
      });
  }
}
