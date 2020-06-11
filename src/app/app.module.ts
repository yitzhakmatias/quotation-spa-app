import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {QuotationComponent} from './components/quotation/quotation.component';
import {HttpClientModule} from '@angular/common/http';
import {PurchaseComponent} from './components/purchase/purchase.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import { PurchaseListComponent } from './components/purchase-list/purchase-list.component';




@NgModule({
  declarations: [
    AppComponent,
    QuotationComponent,
    PurchaseComponent,
    PurchaseListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
