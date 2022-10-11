import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInceptorserviceService {
  constructor(private injector: Injector) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authService = this.injector.get(LoginService);
        let tokenizedreq = req.clone({
            headers: req.headers.set('Authorization', 'bearer ' + authService.getToken())
        })

        return next.handle(tokenizedreq);
    }
}
