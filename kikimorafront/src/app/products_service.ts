import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../app/products'
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  get(id: number): Observable<Product[]>{
    return this.http.get<Product[]>(`http://localhost:8000/api/categories/${id}/products`);
  }
  getproduct(id: number): Observable<Product>{
    return this.http.get<Product>(`http://localhost:8000/api/products/${id}`);
  }
}
