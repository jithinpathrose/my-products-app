import { Injectable } from "@angular/core";
import { Product } from "./product";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private appBaseUrl:string;
    private addProductUrl: string;
    private allProducts:string;
    private myProducts: string;

    constructor(private http: HttpClient){
        this.appBaseUrl  = 'http://localhost:8002';
        this.addProductUrl  = '/product/addProduct';
        this.allProducts = '/product/allProducts';
        this.myProducts = '/product/myProducts';
    }

  public addProduct(product: Product): Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const credentials = btoa("username" + ':' + "password");
    headers.set('Authorization', 'Basic ' + credentials);
   return this.http.post<Product>(this.appBaseUrl+this.addProductUrl, product, {headers});
  
  }

  public findAll(): Observable<Product[]>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const credentials = btoa("username" + ':' + "password");
    headers.set('Authorization', 'Basic ' + credentials);
    return this.http.get<Product[]>(this.appBaseUrl+this.allProducts, {headers});
  }

  public find(income:number, age: number, isStudent:boolean): Observable<Product[]>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const credentials = btoa("username" + ':' + "password");
    headers.set('Authorization', 'Basic ' + credentials);
    const params = {
      income: income,
      age: age,
      isStudent: isStudent
    };
    return this.http.get<Product[]>(this.appBaseUrl+this.myProducts, {headers, params});
  }
}