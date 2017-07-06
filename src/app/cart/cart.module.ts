import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { MinicartComponent } from './minicart/minicart.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule
  ],
  declarations: [MinicartComponent, HomeComponent]
})
export class CartModule { }
