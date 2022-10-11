import { Component, OnInit } from '@angular/core';
import { Supplier } from './supplier.model';
@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.less']
})
export class SupplierComponent implements OnInit {
  SupplierModel:Supplier=new Supplier();
  SupplierModels:Array<Supplier>=new Array<Supplier>();
  Add()
  {
    console.log('Hi');
    this.SupplierModels.push(this.SupplierModel);
    console.log(this.SupplierModel);
    this.SupplierModel=new Supplier();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
