import { Component, OnInit, Output, EventEmitter, OnChanges  } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter } from 'rxjs';
import { SearchService } from 'src/app/core/services/search.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'front-end-internship-assignment-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  bookSearch: FormControl;
  allBooksData:any
  rawBooksData:any
  recordsLength:any
  paramObj:any
  currentPage:number = 0
  tableSize:number= 10
  previousBtn:any
  nextBtn:any
  query: any = "*"
  totalPages:any
  tableSizes:any = [5, 10, 15, 20]
  isLoading:boolean = false
  queryNotFound:boolean = false
  showClearSearchBtn:boolean = false
  displayTrendingSubjectsBook:boolean = false
  showSearchResultsDialogue:boolean = false
  
  constructor(private searchService:SearchService, private uiloader:NgxUiLoaderService, private router:Router) {
    this.bookSearch = new FormControl('');
  }
  

  ngOnInit() {
    this.paramObj = {
      "offset": this.currentPage,
      "limit": this.tableSize,
      "query": this.query
    }
    this.getBooks("*", this.tableSize, this.currentPage)
    
    this.bookSearch.valueChanges
    .pipe(
      debounceTime(500),
    ).
    subscribe((value: string) => {
     if(value){
      console.log(value);
      this.query = value
      this.showClearSearchBtn = true
      this.showSearchResultsDialogue = true
      this.getBooks(this.query, this.tableSize, 0)
     } else {
      this.showClearSearchBtn = false
      this.showSearchResultsDialogue = false
      this.getBooks("*", this.tableSize, this.currentPage)
     }
    });
  }
  getBooks(query:any, limit:any, offset:any){
    this.isLoading = true
      this.searchService.getSearchedBooks(query, limit, limit*offset).subscribe((result) => {
        if(result.numFound > 0){
          this.allBooksData = result?.docs
        this.recordsLength = result?.numFound
        this.isLoading = false
        this.queryNotFound = false
        this.totalPages = Math.floor(this.recordsLength / this.tableSize)
        } else {
          this.queryNotFound = true
        } 
      })
  }
  previousPage(){
    this.paramObj = {
      "offset": this.currentPage--,
      "limit": this.tableSize,
      "query": this.query
    }
    this.getBooks(this.query, this.tableSize, this.currentPage)

  }
  nextPage(){
    this.paramObj = {
      "offset": this.currentPage++,
      "limit": this.tableSize,
      "query": this.query
    }
    this.getBooks(this.query, this.tableSize, this.currentPage)
  }
  tableSizeChange(value:any)
  {
    this.paramObj = {
      "offset": this.currentPage * parseInt(value) + this.currentPage,
      "limit": parseInt(value),
      "query": this.query
    }
    this.getBooks(this.query, this.tableSize, this.currentPage)
  }
  clearSearch(){
    this.bookSearch.setValue('')
    this.queryNotFound = false
    this.showClearSearchBtn = false
  }
  
} 