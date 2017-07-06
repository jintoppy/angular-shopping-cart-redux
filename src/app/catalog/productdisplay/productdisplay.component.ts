import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-productdisplay',
  templateUrl: './productdisplay.component.html',
  styleUrls: ['./productdisplay.component.css']
})
export class ProductdisplayComponent implements OnInit {
  product;
  constructor(
    private service:ProductService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params) => {
        return this.service.getProductById(params.productId);          
      })
      .subscribe((res) => {
          this.product = res;
      });
    
  }

}
