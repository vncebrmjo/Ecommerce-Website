import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';

export interface Product {
  id: number;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(
    private http: HttpClient,
    private configService: ConfigService
  ) { }

  getProducts(): Observable<Product[]> {
    const url = `${this.configService.apiUrl}/products`;
    return this.http.get<Product[]>(url);
  }

  getProduct(id: number): Observable<Product> {
    const url = `${this.configService.apiUrl}/products/${id}`;
    return this.http.get<Product>(url);
  }
}
