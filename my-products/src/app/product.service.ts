import { Injectable } from "@angular/core";
import { Product } from "./product";
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private appBaseUrl = 'http://localhost:8002';
    private addProductUrl = '/product/addProduct';

    constructor(private http: HttpClient){}

  public addProduct(product: Product): String{
     this.http.post<Product>('${this.appBaseUrl}'+'${this.addProductUrl}'
    , product);
    return 'Product Added successfully';
  }
}