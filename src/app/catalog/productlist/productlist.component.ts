import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  products = [];
  constructor(private service:ProductService) { }

  ngOnInit() {
    this.service.getProducts()
      .subscribe((res) => {
          this.products = res;
      });
  }

}
