import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidate } from '../models/candidate.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  private apiUrl = `${environment.apiBaseUrl}/api/favorites`;

  constructor(private http: HttpClient) {}

  getFavorites(): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(this.apiUrl);
  }

  addFavorite(candidateId: string): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${candidateId}`, {});
  }

  removeFavorite(candidateId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${candidateId}`);
  }
}
