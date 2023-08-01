import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { StoreService } from 'src/app/services/store.service';
const ROWS_HEIGHT: {[id:number]: number} = {1:400, 3:335,4:350}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  category: string | undefined
  cols = 3;
  rowHeight = ROWS_HEIGHT[this.cols]
  products: Array<Product> | undefined;
  sort = 'asc';
  count = '12';
  productsSubscription:Subscription | undefined
  constructor(private cartService: CartService, private storeService: StoreService ) { }

  ngOnInit(): void {
    this.getProducts();
  }
  // When you make an asynchronous operation in Angular, like an HTTP request using the HttpClient module, the result is usually wrapped in an Observable. The Observable represents a stream of data that may arrive over time. To access the data from the Observable, you need to "subscribe" to it.
  getProducts(): void{
    this.productsSubscription = this.storeService.getAllProducts(this.count, this.sort)
    .subscribe((_products)=>{
      this.products = _products;
    })
  }
  getProductsonCategory():void{
    this.productsSubscription = this.storeService.getAllProductsonCategory(this.category)
    .subscribe((_products)=>{
      this.products = _products;
    })
  }
  onColumnsCountChange(colsNum: number): void{
    this.cols =colsNum ;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }
  onShowCategory(newCategory: string):void{
    this.category = newCategory;
    this.getProductsonCategory();
  }
  onAddToCart(product: Product):void{
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id
    });
  }

  onItemsCountChange(newCount: number): void{
    this.count = newCount.toString();
    this.getProducts();
  }

  onSortChange(newSort: string): void{
    this.sort = newSort;
    this.getProducts();
  }

  //ngOnDestroy() is for when you navigate to the home page again. The application don't subscribe multiple times. This is to prevent memory leaks
  ngOnDestroy(): void {
      if(this.productsSubscription){
        this.productsSubscription.unsubscribe();
      }
  }
}
