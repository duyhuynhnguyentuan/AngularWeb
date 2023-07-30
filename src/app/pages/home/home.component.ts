import { Component, OnInit } from '@angular/core';
const ROWS_HEIGHT: {[id:number]: number} = {1:400, 3:335,4:350}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  category: string | undefined
  cols = 3;
  rowHeight = ROWS_HEIGHT[this.cols]
  constructor() { }

  ngOnInit(): void {
  }
  onColumnsCountChange(colsNum: number): void{
    this.cols =colsNum ;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }
  onShowCategory(newCategory: string):void{
    this.category = newCategory
  }
}
