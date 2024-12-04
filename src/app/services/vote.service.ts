import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vote } from '../models/vote.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VoteService {
  private apiUrl = `${environment.apiBaseUrl}/api/votes`;

  constructor(private http: HttpClient) {}

  castVote(candidateId: string): Observable<Vote> {
    return this.http.post<Vote>(this.apiUrl, { candidateId });
  }

  getVotes(): Observable<Vote[]> {
    return this.http.get<Vote[]>(this.apiUrl);
  }
}
