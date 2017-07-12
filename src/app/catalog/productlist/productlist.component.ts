import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  products = [];
  constructor(
    private service:ProductService,
    private store: Store<Object>
    ) { }

  ngOnInit() {
    this.service.getProducts();    

    this.store.select('catalog')
      .subscribe(x => {
        this.products = x['products'];     
      });
  }

}
