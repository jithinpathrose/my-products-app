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
  productName: string = '';
  productDescription: string = '';

  constructor(private productService: ProductService){}

  ngOnInit(): void {
  }

  public addProduct(): String{
    const productObj: Product ={
      name : this.productName,
      description: this.productDescription
    };
    console.log("called component");
    return this.productService.addProduct(productObj);
  }
}
