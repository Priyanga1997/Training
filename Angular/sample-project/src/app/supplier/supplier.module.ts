import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { supplierroutes } from '../routing/supplierroutes';
import { SupplierComponent } from './supplier.component';
import { GridUIModule } from '../utilities/grid-ui/grid-ui.module';


@NgModule({
  declarations: [
    SupplierComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(supplierroutes),
    GridUIModule
  ],
  providers: [],
  bootstrap: [SupplierComponent]
})
export class SupplierModule { }