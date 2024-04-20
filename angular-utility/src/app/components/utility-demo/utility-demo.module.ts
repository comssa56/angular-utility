
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UtilityDemoRoutingModule } from './utility-demo-routing.module';
import { TestComponent } from './test/test.component';

/* App Root */


/* Routing Module */

@NgModule({
  imports: [
    UtilityDemoRoutingModule
  ],
  declarations: [
    TestComponent
  ],
})
export class UtilityDemoModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/