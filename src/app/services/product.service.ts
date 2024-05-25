import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproduct } from '../interfaces/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {

  }

  getAll(){
    return this.http.get<Iproduct[]>('http://localhost:3000/products')
  }
  addPro(product:Iproduct):Observable<Iproduct> {
    console.log(product)
    return this.http.post<Iproduct>('http://localhost:3000/products',product)
  }

}
