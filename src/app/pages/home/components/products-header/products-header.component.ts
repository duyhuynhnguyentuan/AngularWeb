import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columnsCountChange = new EventEmitter<number>();
  // output() is used to send output from ouside component to parent component
  sort = 'desc';
    itemsShowCount = 12;
  constructor() { }

  ngOnInit(): void {
  }
  onSortUpdated(newSort: string): void{
    this.sort = newSort
  }
  onItemsUpdated(count: number): void{
    this.itemsShowCount = count;
  }
  onColumnsUpdated(colsNum: number): void{
    this.columnsCountChange.emit(colsNum);
  }
}
