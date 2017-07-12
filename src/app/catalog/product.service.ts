import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Store} from '@ngrx/store';
import {LoginService} from '../login/login.service';

@Injectable()
export class ProductService {

  constructor(private http: Http, 
  private store: Store<Object>,
  private loginService: LoginService
  ) { }

  getProducts(){
      const headers = new Headers({
        token: this.loginService.getUserToken()
      });
      return this.http
              .get('/api/products', {
                headers:headers
              })
              .map((res) => {
                  return res.json();
              });
              
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
