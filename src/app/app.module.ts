import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HttpModule} from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {AppReducer} from './reducers';
import {ErrorHandler} from '@angular/core';
import {AppErrorHandler} from './error.handler';
import {CatalogActions} from './actions/catalog.action';
import { EffectsModule } from '@ngrx/effects';


import { AppComponent } from './app.component';
import {CartModule} from './cart/cart.module';
import {CheckoutModule} from './checkout/checkout.module';
import {CatalogModule} from './catalog/catalog.module';
import { HighlightDirective } from './highlight.directive';
import { LoginComponent } from './login/login.component';
import {LoginService} from './login/login.service';

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
    AppComponent,
    HighlightDirective,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    CartModule,
    CheckoutModule,
    CatalogModule,
    StoreModule.provideStore(AppReducer),
    EffectsModule.run(CatalogActions),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    })
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler
     },
     LoginService,
     CatalogActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
