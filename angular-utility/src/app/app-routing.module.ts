import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const utilityDemo = import('./components/utility-demo/utility-demo.module');

export const routes: Routes = [
//   { path: '', redirectTo: 'contact', pathMatch: 'full'},
  { path: 'demos', loadChildren: () => utilityDemo.then(m => m.UtilityDemoModule) },
//   { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/