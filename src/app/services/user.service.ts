import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userURL: string = "http://localhost:3000/users";
  constructor(private httpClient: HttpClient) { }

  signup(user) {
    return this.httpClient.post<{ message: any }>(this.userURL + "/signup", user);
  }

  login(user) {
    return this.httpClient.post<{ result: any, message: any }>(this.userURL + "/login", user);
  }
}
