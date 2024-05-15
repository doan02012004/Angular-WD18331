import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Iproduct } from '../../interfaces/Product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

      @Input() product!:Iproduct
      @Output() newHidden = new EventEmitter<boolean>
      onHidden(){
          this.newHidden.emit(false)
      }

}
