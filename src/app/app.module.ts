import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HttpModule} from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {AppReducer} from './reducers';
import {ErrorHandler} from '@angular/core';
import {AppErrorHandler} from './error.handler';

import { AppComponent } from './app.component';
import {CartModule} from './cart/cart.module';
import {CheckoutModule} from './checkout/checkout.module';
import {CatalogModule} from './catalog/catalog.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'catalog',
    pathMatch: 'full'
  },
  {
    path: 'lazy',
    loadChildren: './lazy/lazy.module#LazyModule'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    CartModule,
    CheckoutModule,
    CatalogModule,
    StoreModule.provideStore(AppReducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    })
  ],
  providers: [
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
