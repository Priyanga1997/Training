import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from '../models/userdata';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
 ErrorMessage:any='';
  constructor(private _service:LoginService,private _router:Router) { }
  UserDataModel:UserData=new UserData();
  ngOnInit(): void {
  }

  loginUser(){
    this._service.loginUser(this.UserDataModel).subscribe(res=>{
      console.log('Hi You are able to login');
      localStorage.setItem('token',res.token);
      this._router.navigate(['dummy']);
    },res=>
    {
      console.log(res);
      this.ErrorMessage="Some error have occured";
      document.getElementById('btnErrorMsg')?.click();
    });
  }
 
}
