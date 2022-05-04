import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../app/categories'
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) { }

  get(): Observable<Category[]>{
    return this.http.get<Category[]>('http://localhost:8000/api/categories');
  }

  post(name: string): Observable<Category>{
    return this.http.post<Category>('http://localhost:8000/api/categories', { "categories": { "name": name } })
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:8000/api/categories/${id}`)
  }

  update(id: number, new_name: string): Observable<Category>{
    return this.http.put<Category>(`http://localhost:8000/api/categories/${id}`, { "categories": { "name": new_name } })
  }
}
