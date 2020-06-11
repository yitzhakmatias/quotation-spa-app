import {Routes} from '@angular/router';
import {QuotationComponent} from './components/quotation/quotation.component';
import {PurchaseComponent} from './components/purchase/purchase.component';

export const appRoutes: Routes = [
  {path: 'Quotation', component: QuotationComponent},
  {path: 'Purchases', component: PurchaseComponent},
  {path: '**', redirectTo: 'Quotation', pathMatch: 'full'},
];
