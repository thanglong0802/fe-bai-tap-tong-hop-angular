import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:6789/user';

  constructor(private htppClient: HttpClient) {}

  userLogin(username: string, password: string): Observable<any> {
    const body = {
      username,
      password,
    };
    return this.htppClient.post(`${this.baseUrl}/login`, body);
  }

  userSignup(
    username: string,
    password: string,
    email: string
  ): Observable<any> {
    const body = {
      username,
      password,
      email,
    };
    return this.htppClient.post(`${this.baseUrl}`, body);
  }

  userSignupWithAdmin(
    username: string,
    password: string,
    email: string,
    role: string
  ): Observable<any> {
    const body = {
      username,
      password,
      email,
      role,
    };
    return this.htppClient.post(`${this.baseUrl}/admin`, body);
  }
}
