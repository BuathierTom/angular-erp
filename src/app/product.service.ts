import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './products';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl = 'http://80.11.122.222:8000/polyfx/cgi/getart.cgi?frs=';
  private fournisseurId : string = "401000243";
  private products: Product[]=[];


  constructor(private http: HttpClient) { 

  }

  getProducts(): Observable<Product[]>{
    if (this.products.length == 0) {
      return this.http.get<Product[]>(this.productsUrl + this.fournisseurId);
    }
    else {
      return of(this.products);
    }
  }
}
