import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'front-end-internship-assignment-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router:Router){}

  navSearchBar:boolean = false
  term:any
  trendingSubjects: Array<any> = [
    { name: 'JavaScript' },
    { name: 'CSS' },
    { name: 'HTML' },
    { name: 'Harry Potter' },
    { name: 'Crypto' },
  ];
  searchSubject(){
    this.navSearchBar = !this.navSearchBar
  }
  goToHome(){
    this.router.navigate(['/'])
  }
}
