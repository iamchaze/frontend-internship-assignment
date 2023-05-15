import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private apiService:ApiService) { }

  getSearchedBooks(query:string, limit:any, offset:any){
    return this.apiService.get(`/search.json?q=${query}&limit=${limit}&offset=${offset}`)

  }
}
