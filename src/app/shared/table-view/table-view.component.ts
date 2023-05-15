import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/core/models/book-response.model';
import { NgxPaginationModule } from 'ngx-pagination/public-api';

@Component({
  selector: 'front-end-internship-assignment-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss'],
})
export class TableViewComponent implements OnInit {
  @Input() allBooks:Book[] = []
  @Input() booksList: Book[] = [];
  @Input() subjectName: string = '';
  @Input() totalRecords:number = 0 
  property:any = "author_name"
  booksTable:any
  books:any
  currentPage:any
  tableSize:any = 10
  tableSizes:any = [5, 10, 25, 100]
  recordsLength:any
  displayTrendingSubjectsBook:boolean = false

  ngOnInit() {
    if(this.booksList){
      this.displayData()
      this.recordsLength = this.booksList.length
      console.log("recordslength:",this.recordsLength);
    } 
  }

displayData(){
  this.booksList[0].hasOwnProperty(this.property) 
  ? this.displayTrendingSubjectsBook = false 
  : this.displayTrendingSubjectsBook = true
}
  onPageChange(value:any){
    console.log(value);
    
  }
}
