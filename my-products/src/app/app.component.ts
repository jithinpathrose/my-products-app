import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'my-products';
  products: Product[] = [];
  myproducts: Product[] = [];
  product: Product;
  income:number;
  age: number;
  isStudent:boolean;
  selectedTab: number = 1;

  selectTab(tabIndex: number) {
    this.selectedTab = tabIndex;
  }
  
  constructor(private productService: ProductService){
    this.product = new Product('', '');
    this.income = 0;
    this.age = 0;
    this.isStudent = false;
  }

  ngOnInit(): void {
    this.productService.findAll().subscribe(data => {
      this.products = data;
    });
  }

  public addProduct(): void{
  
    console.log("called component"+ this.product.productName);
    this.productService.addProduct(this.product).subscribe(data => {
      this.products.push(data);
    },
    error => {
      console.error("An error occurred while adding the product:", error);
      window.alert("Sorry! Product Add failed. Try another Product");
    });
  }

  public showAlert(): void{
    window.alert("Product Added");
    this.clearForm();
  }

  clearForm() {
    const form = document.getElementById('id01') as HTMLFormElement;
    const inputs = form.getElementsByTagName('input');

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = '';
    }
  }

  public findMyProducts(): void{
    this.productService.find(this.income, this.age, this.isStudent).subscribe(
      data => {
        this.myproducts = data;
      }
    );
  }
}
