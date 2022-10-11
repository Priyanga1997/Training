import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { customerroutes } from '../routing/customerroutes';
import { CustomerComponent } from './customer.component';
import { GridUIModule } from '../utilities/grid-ui/grid-ui.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInceptorserviceService } from '../services/token-inceptorservice.service';

@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(customerroutes),
    GridUIModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenInceptorserviceService,multi:true}],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }