import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {Store} from '@ngrx/store';
import {CatalogActions} from '../../actions/catalog.action';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  products = [];
  isLoading = false;
  constructor(
    private service:ProductService,
    private store: Store<Object>,
    private catalogActions: CatalogActions
    ) { }

  ngOnInit() {
    //this.service.getProducts();
    this.store.dispatch(this.catalogActions.getProducts())

    this.store.select('catalog')
      .subscribe(x => {
        this.products = x['products'];     
      });
  }

}
