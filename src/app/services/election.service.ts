import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Election } from '../models/election.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ElectionService {
  private apiUrl = `${environment.apiBaseUrl}/api/elections`;

  constructor(private http: HttpClient) {}

  getElections(): Observable<Election[]> {
    return this.http.get<Election[]>(this.apiUrl);
  }

  getElection(id: string): Observable<Election> {
    return this.http.get<Election>(`${this.apiUrl}/${id}`);
  }

  createElection(election: Election): Observable<Election> {
    return this.http.post<Election>(this.apiUrl, election);
  }

  updateElection(id: string, election: Election): Observable<Election> {
    return this.http.put<Election>(`${this.apiUrl}/${id}`, election);
  }

  deleteElection(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
