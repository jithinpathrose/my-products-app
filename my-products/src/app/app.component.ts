import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'my-products';

  constructor(private productService: ProductService){}

  ngOnInit(): void {
  }

  public addProduct(product: Product): String{
    return this.productService.addProduct(product);
  }
}
