import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdisplayComponent } from './productdisplay/productdisplay.component';
import { HomeComponent } from './home/home.component';
import {ProductService} from './product.service';

@NgModule({
  imports: [
    CommonModule,
    CatalogRoutingModule
  ],
  declarations: [ProductlistComponent, ProductdisplayComponent, HomeComponent],
  providers: [
    ProductService
  ]
})
export class CatalogModule { }
