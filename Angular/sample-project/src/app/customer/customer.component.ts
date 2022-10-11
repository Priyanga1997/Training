import { Component, Input, OnInit } from '@angular/core';
import { Customer } from './customer.model';
import { HttpClient } from '@angular/common/http';

@Component({
  // selector: 'app-root',
  templateUrl: './customer.component.html',
  // styleUrls: ['./app.component.less']
})
export class CustomerComponent implements OnInit {
  title = 'sample-project';
  imageURL="././assets/image.jpg";
  isEdit=false;
  ErrorMessage:string='';
  ngOnInit(): void {

    this.GetDataFromServer();
  }
  
  Success(input:any){
    this.CustomerModels=input;
  }
  constructor(private http:HttpClient) {

  }
  GetDataFromServer(){
    this.http.get("https://localhost:44379/api/customer").subscribe(res=>this.Success(res),res=>console.log(res));

  }
 
  CustomerModel:Customer=new Customer();
  CustomerModels:Array<Customer>=new Array<Customer>();
  Add()
  {
    //this.http.post("http://localhost:3000/customers",this.CustomerModel).subscribe(res=>this.PostSuccess(res),res=>console.log(res));
    // console.log('Hi');
    // this.CustomerModels.push(this.CustomerModel);
    // console.log(this.CustomerModels);
    var customerdto = {
      customerCode: this.CustomerModel.customerCode,
      customerName: this.CustomerModel.customerName,
      customerAmount: this.CustomerModel.customerAmount
    };
    if(this.isEdit){
      this.http.put("https://localhost:44379/api/customer/",customerdto)
      .subscribe(res=>this.PostSuccess(res),res=>console.log(res))
    }
    else{
      this.http.post("https://localhost:44379/api/customer",customerdto)
      .subscribe(res=>this.PostSuccess(res),res=>console.log(res))
    //   res=>
    // {
    //   console.log(res);
    //   this.ErrorMessage="Some error have occured";
    //   document.getElementById('btnErrorMsg')?.click();
    // });
    //   this.ErrorMessage="Some error have occured";
    //   document.getElementById('btnErrorMsg')?.click();
    // }
    this.CustomerModel=new Customer();
  }
}
  PostSuccess(input:any){
    this.GetDataFromServer();
  }
  

  EditCustomer(input: any) {
    debugger;
    this.isEdit=true;
    this.CustomerModel = input;
  }
  DeleteCustomer(input:any){
    this.http.delete("https://localhost:44379/api/customer?id="+input.id).subscribe(res=>this.PostSuccess(res),res=>console.log(res));
  }
  hasError(typeofValidator:string,controlname:string):Boolean{
    return this.CustomerModel.formCustomerGroup.controls[controlname].hasError(typeofValidator);
  }
}


