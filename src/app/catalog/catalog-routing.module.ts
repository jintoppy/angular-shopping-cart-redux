import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdisplayComponent } from './productdisplay/productdisplay.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'catalog',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: ProductlistComponent
      },
      {
        path: 'productdetails/:productId',
        component: ProductdisplayComponent
      }
    ]
  }
,];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
