import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html'
})
export class FiltersComponent implements OnInit, OnDestroy {
  @Output() showCategory = new EventEmitter<string>();
   categoriesSubscription: Subscription | undefined
  categories : Array<Product> | undefined;
  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
   this.categoriesSubscription = this.storeService.getAllCategories()
    .subscribe((response)=>{
      this.categories = response
    });
  }
   
  onShowCategory(category: string): void{
    this.showCategory.emit(category);
  }
  ngOnDestroy(): void {
      if(this.categoriesSubscription){
        this.categoriesSubscription.unsubscribe
      }
  }
  // Add this function in your component class
isDistinctCategory(category: Product): boolean {
  if (!this.categories) {
    return false;
  }

  // Check if the current category is distinct from previous ones
  const index = this.categories.findIndex((c) => c.category === category.category);
  return index === this.categories.indexOf(category);
}

}
