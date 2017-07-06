import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import {Store} from '@ngrx/store';

@Injectable()
export class ProductService {

  constructor(private http: Http, 
  private store: Store<Object>
  ) { }

  getProducts(){
      return this.http
              .get('/assets/data/products.json')
              .map((res) => {
                  return res.json();
              })
              .subscribe(res => {
                this.store.dispatch({
                  type: 'PRODUCTS_LIST_RECEIVED',
                  payload: res
                });
              })
  }

  getProductById(productId){
      return this.http
              .get('/assets/data/products.json')
              .map((res) => {
                  return res.json();
              })
              .map((res) => {
                const currentProduct = res.filter(x=> 
                    x.id === parseInt(productId)
                  );
                return currentProduct.length> 0 ? 
                        currentProduct[0]: 
                        null;
              })
  }



}
