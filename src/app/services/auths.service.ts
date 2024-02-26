import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login, LoginResponse, Register } from '../types';

@Injectable({
  providedIn: 'root'
})
export class AuthsService {

  constructor(private http: HttpClient) { }

  private apiURL = "http://localhost:8000/users";

  login(account: Login): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiURL}/login`, account);
  }

  register(account: Register): Observable<any> {
    return this.http.post<LoginResponse>(`${this.apiURL}/register`, account);
  }
}
