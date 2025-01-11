import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Category } from '../models/category.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private http = inject(HttpClient);

  baseUrl = signal<string>('https://api.escuelajs.co/api/v1');

  delete(categoryId: number): Observable<boolean> {
    return this.http.delete<boolean>(
      `https://api.escuelajs.co/api/v1/categories/${categoryId}`
    );
  }
}
