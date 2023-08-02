import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private _cart : Cart = {
    items: []
  };
  itemsQuantity = 0;

  @Input()
  get cart(): Cart{
    return this._cart;
  }
  set cart(cart: Cart){
    this._cart=cart;
    this.itemsQuantity = cart.items
    .map((item)=>item.quantity)
    .reduce((prev,current)=>prev+current,0)

  }

  svgLogoUrl: SafeResourceUrl;
  
  constructor(private cartService: CartService, private sanitizer: DomSanitizer){
    this.svgLogoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('images/DuyHuynh.svg');
  }

 

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart : Cart)=>{
      this.cart = _cart
      
    })
  }
  getTotal(items: Array<CartItem>): number{
    return this.cartService.getTotal(items);
  }
  onClearCart(){
     this.cartService.clearCart();
  }
}
