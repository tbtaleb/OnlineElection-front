import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = `${environment.apiBaseUrl}/api/auth`;

  constructor(private http: HttpClient) {}

  register(user: User): Observable<{ token: string; user: User }> {
    return this.http.post<{ token: string; user: User }>(
      `${this.apiUrl}/register`,
      user
    );
  }

  login(
    email: string,
    password: string
  ): Observable<{ token: string; user: User }> {
    return this.http.post<{ token: string; user: User }>(
      `${this.apiUrl}/login`,
      { email, password }
    );
  }

  saveToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  logout(): void {
    localStorage.removeItem('authToken');
  }
}
