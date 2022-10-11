import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  _loginUrl="https://localhost:44379/api/login/login-user";
  _registerUrl="https://localhost:44379/api/login/register-user";
  constructor(private http:HttpClient) { }

  loginUser(login:any){
    return this.http.post<any>(this._loginUrl,login);
  }
  getToken(){
    return localStorage.getItem('token');
  }
}
