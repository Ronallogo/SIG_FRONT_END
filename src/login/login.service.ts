import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost:8080/api/v1/auth';
  constructor(
    private http: HttpClient,
  ) { }

  login(login: any): Observable<any> {
    console.log(login);
    return this.http.post(`${this.baseUrl}/authentication`, login);
  }



}
