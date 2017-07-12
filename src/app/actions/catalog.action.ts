import {Injectable} from '@angular/core';
import {ProductService} from '../catalog/product.service';
import { Actions, Effect } from '@ngrx/effects';

@Injectable()
export class CatalogActions{
    constructor(
        private productService: ProductService,
        private actions$: Actions
        ){

    }
     @Effect() 
     product$ = this.actions$
                    .ofType('PRODUCT_LIST_REQUESTED')
                    .switchMap(() => this.productService.getProducts())
                    .map(products => {
                        return this.onProductListReceived(products);
                    });

    onProductListReceived(products){
        return {
                  type: 'PRODUCTS_LIST_RECEIVED',
                  payload: products
        };
    }
    getProducts(){
        return {
            type: 'PRODUCT_LIST_REQUESTED'
        };
    }
}