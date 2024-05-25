import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Iproduct } from './interfaces/Product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { FormAddComponent } from './form-add/form-add.component';
import { ProductService } from './services/product.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,ProductDetailComponent,FormAddComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  productDetail:any = {};
  checkDetail:boolean = false
  checkFormAdd: boolean = false
  products!: Iproduct[];

  constructor(private ProductServices: ProductService ){
      this.ProductServices.getAll().subscribe(products =>{ this.products=products})
      
  }
    remove(id:number|string){
    if(confirm('Bạn có muốn xóa không?'))
      this.products = this.products.filter((item)=> item.id != id)
    }
    onRemove(i: number){
      if(confirm('Bạn có muốn xóa không?')){
        this.products = this.products.filter((item,index)=> index != i)
      }
    }
    onView(product:Iproduct){
      this.productDetail = product
     if(this.productDetail!=""){
        this.checkDetail = true
     }
    }
    getHidden(check:boolean){
      this.checkDetail = check
    }
    getProduct(product:Iproduct){
      this.products.push(product)
    }
    onOpenForm(){
      this.checkFormAdd = true
    }
    getCloseForm(check:boolean){
      this.checkFormAdd = check
    }
}
