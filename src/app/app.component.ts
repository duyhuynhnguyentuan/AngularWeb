import { Component, OnInit } from '@angular/core';
import { Cart } from './models/cart.model';
import { CartService } from './services/cart.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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
  svgLogoUrl: SafeResourceUrl;
  
  constructor(private cartService: CartService, private sanitizer: DomSanitizer){
    this.svgLogoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('images/DuyHuynh.svg');
  }

  ngOnInit(){
      this.cartService.cart.subscribe((_cart)=>{
        this.cart = _cart;
      });
  }
}
