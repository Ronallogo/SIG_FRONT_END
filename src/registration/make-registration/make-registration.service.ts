import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MakeRegistrationService {

  private baseUrl = 'http://localhost:8080/api/v1/auth';



  constructor(private http: HttpClient) { }




  registration(register: any): Observable<any> {
    console.log(register);
    return this.http.post(`${this.baseUrl}/register`, register);
  }




}
