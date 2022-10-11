import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.less']
})
export class DummyComponent implements OnInit {

  constructor(private jwt: JwtHelperService, private _auth: LoginService) { }

  name='';
  ngOnInit(): void {
    this.name=this.jwt.decodeToken(this._auth.getToken()?.toString()).unique_name;
    console.log(this.jwt.decodeToken(this._auth.getToken()?.toString()));
    console.log(this.name);
  }

}
