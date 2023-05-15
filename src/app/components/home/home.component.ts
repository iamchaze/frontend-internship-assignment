import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter } from 'rxjs';
import { SearchService } from 'src/app/core/services/search.service';

@Component({
  selector: 'front-end-internship-assignment-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  bookSearch: FormControl;
  allBooksData:any
  rawBooksData:any
  constructor(private searchService:SearchService) {
    this.bookSearch = new FormControl('');
  }

  trendingSubjects: Array<any> = [
    { name: 'JavaScript' },
    { name: 'CSS' },
    { name: 'HTML' },
    { name: 'Harry Potter' },
    { name: 'Crypto' },
  ];

  ngOnInit() {
    this.getAllBooks()
    

    // this.bookSearch.valueChanges
    //   .pipe(
    //     debounceTime(300),
    //   ).
    //   subscribe((value: string) => {
    //     console.log();
    //   });
  }

  getAllBooks(){
      this.searchService.getSearchedBooks("*", 20, 0).subscribe((result) => {
        this.rawBooksData = result
        this.allBooksData = this.rawBooksData.docs
      })
  }
}
