import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ProductService {

  constructor(private http: Http) { }

  getProducts(){
      return this.http
              .get('/assets/data/products.json')
              .map((res) => {
                  return res.json();
              });
  }

  getProductById(productId){
      return this.getProducts()
              .filter((item) => {
                return item.id === parseInt(productId);
              })
              .map((item) => {
                console.log(item);
                return item;
              })
  }



}
