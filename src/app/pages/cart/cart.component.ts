import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Cart = {items: [
    {
    product:'https://via.placeholder.com/150',
    name:'snickers',
    price: 150,
    quantity: 1,
    id: 1,
},
    {
    product:'https://via.placeholder.com/150',
    name:'snickerser',
    price: 150,
    quantity: 5,
    id: 2,
}
]};
dataSource: Array<CartItem> = [];
displayedColumns: Array<string> = [
  'product',
  'name',
  'price',
  'quantity',
  'total',
  'action' 
]
  constructor(private cartService: CartService, private http: HttpClient) { 

  }

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart : Cart)=>{
      this.cart = _cart
      this.dataSource = this.cart.items
    })
  }
 getTotal(items: Array<CartItem>):number 
 {
 return this.cartService.getTotal(items)
 }
 onClearCart():void{
  this.cartService.clearCart();
 }
 onRemoveFromCart(item: CartItem):void{
  this.cartService.removeFromCart(item);
 }
 //add additional qunatity in cart page
 onAddQuantity(item: CartItem):void{
  this.cartService.addToCart(item);
 }
 onRemoveQuantity(item : CartItem):void{
  this.cartService.removeQuantity(item);
 }
 onCheckout():void{
  this.http.post('http://localhost:4242/checkout', {
    items: this.cart.items
  }).subscribe(async (res: any)=> {
    let stripe = await loadStripe
    //load public key below
    ('pk_test_51N8nwdC1pGhMPsxhk9NO1PTKGpzmO5fuVSfRYIKJJEbukIl4bSeBiGfRWlYDlw8B0PmGfhBMW41mZ8iwceSI8iGk00XivaNuco');
    stripe?.redirectToCheckout({
      // this will redirect to stripe checkout page
      sessionId : res.id
    })
  });
 }


}
