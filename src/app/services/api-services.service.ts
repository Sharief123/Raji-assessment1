import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  ServiceURL = 'http://localhost:8080/api/v1';

  constructor(private httpClient: HttpClient) { }


  getSignUp(payload: any){
    return this.httpClient.post(`${this.ServiceURL}`+`/register/signUp`,payload);
  }

  getLogin(payload: any){
    return this.httpClient.post(`${this.ServiceURL}`+`/register/signIn`,payload);
  }

  getChangePassword(payload: any){
    return this.httpClient.post(`${this.ServiceURL}`+`/register/change`,payload);
  }
}
