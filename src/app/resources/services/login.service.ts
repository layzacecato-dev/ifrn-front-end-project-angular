import { Injectable } from '@angular/core';
import { RequestLogin } from '../models/RequestLogin';
import { ResponseLogin } from '../models/ResponseLogin';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private httpClient: HttpClient) {}

  public doLogin(requestLogin: RequestLogin): Observable<ResponseLogin> {
    return this.httpClient.post<ResponseLogin>('http://localhost:8080/api/login', 
    requestLogin
    );
  }
}
