import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

const STORE_BASE_URL = 'https://64c93d16b2980cec85c2114b.mockapi.io'

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private httpClient: HttpClient) { 
    
  }

  getAllProducts(limit = '12', sort= 'asc'): Observable<Array<Product> > {
    return this.httpClient.get<Array<Product> >(
      `${STORE_BASE_URL}/items?page=1&limit=${limit}&sortBy=price&order=${sort}`
    )
  }
  
  getAllCategories(): Observable<Array<Product> >{
      return this.httpClient.get<Array<Product> >(
        `${STORE_BASE_URL}/items`
      )
  }

  getAllProductsonCategory(categories: string | undefined): Observable<Array<Product> >{
    return this.httpClient.get<Array<Product> >(
      `${STORE_BASE_URL}/items?category=${categories}`
    )
  }
}
