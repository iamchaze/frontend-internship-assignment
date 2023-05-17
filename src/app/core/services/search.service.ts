import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private apiService:ApiService) { }

  getSearchedBooks(query:string, limit:any, offset:any): Observable<any>{
    return this.apiService.get(`/search.json?q=${query}&limit=${limit}&offset=${offset}`)

  }
}
