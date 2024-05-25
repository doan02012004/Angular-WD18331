import { Component, EventEmitter, Output } from '@angular/core';
import { Iproduct } from '../interfaces/Product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-form-add',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './form-add.component.html',
  styleUrl: './form-add.component.css'
})
export class FormAddComponent {
  @Output() newProduct = new EventEmitter<Iproduct>
  @Output() close = new EventEmitter<boolean>
  checkForm:boolean = false
  productForm: Iproduct = {
    name:"",
    image:"https://picsum.photos/id/14/400/300",
    price:0,
    description:""
  }
  constructor(private ProductServices: ProductService ){
  }

  addProduct(){
    this.ProductServices.addPro(this.productForm).subscribe(product => {this.newProduct.emit(product)})
    this.productForm = {
      name:"",
      image:"https://picsum.photos/id/14/400/300",
      price:0,
      description:""
    }
  }
  onHidden(){
      this.close.emit(this.checkForm)
  }
}
