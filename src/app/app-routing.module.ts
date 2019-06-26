import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleOrderComponent } from './single-order/single-order.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { OrdersComponent } from './orders/orders.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '', 
    component: ListComponent
  },
  {
    path: 'single-order', 
    component: SingleOrderComponent
  },
  {
    path: 'invoice', 
    component: InvoiceComponent
  },
  {
    path: 'orders', 
    component: OrdersComponent
  },
  {
    path: 'list', 
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
