import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Iproduct } from './interfaces/Product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { FormAddComponent } from './form-add/form-add.component';


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

    products: Iproduct[] = [
      {
        id: 1,
        name: "Mì cay Hàn Quốc",
        image: "https://picsum.photos/id/20/400/300",
        price: 200,
        description: "Mì Cay"
      },
      {
        id: 2,
        name: "Bún chả Hà Nội",
        image: "https://picsum.photos/id/18/400/300",
        price: 300,
        description: "Bún chả"
      },
      {
        id: 3,
        name: "Xúc xích nướng",
        image: "https://picsum.photos/id/21/400/300",
        price: 400,
        description: "Xúc xích"
      },
      {
        id: 4,
        name: "Xiên chả cá",
        image: "https://picsum.photos/id/23/400/300",
        price: 400,
        description: "Chả Cá"
      }
    ];

    remove(id:number|string){
    if(confirm('Bạn có muốn xóa không?'))
      this.products = this.products.filter((item)=> item.id != id)
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

}
