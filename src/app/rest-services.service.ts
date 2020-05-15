import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestServicesService {
  configUrl = 'http://localhost:3000/';
  isUserLoggedIn =false;
  constructor(private http: HttpClient) { }

  signUp(data){
    return this.http.post(`${this.configUrl}postUser`, data);
  }
  login(data){
    return this.http.post(`${this.configUrl}login`,data);
  }
  getUser(param){
    return this.http.get(`${this.configUrl}api/getuser/${param}`);
  }
  
  setStorage(key,data){
    localStorage.setItem(key, JSON.stringify(data,null,4));
  }

  getStorage(key){
    return JSON.parse(localStorage.getItem(key));
  }
}
