import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    CheckoutRoutingModule
  ],
  declarations: [HomeComponent]
})
export class CheckoutModule { }
