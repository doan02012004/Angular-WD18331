import { Component, EventEmitter, Output } from '@angular/core';
import { Iproduct } from '../interfaces/Product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-add',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './form-add.component.html',
  styleUrl: './form-add.component.css'
})
export class FormAddComponent {
  @Output() newProduct = new EventEmitter<Iproduct>
  productForm: Iproduct = {
    id:0,
    name:"",
    image:"",
    price:0,
    description:""
  }
  addProduct(){
    this.newProduct.emit(this.productForm)
    this.productForm = {
      id:0,
      name:"",
      image:"",
      price:0,
      description:""
    }
  }
}
