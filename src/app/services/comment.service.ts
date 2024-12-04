import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private apiUrl = `${environment.apiBaseUrl}/api/comments`;

  constructor(private http: HttpClient) {}

  addComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.apiUrl, comment);
  }

  getComments(candidateId: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.apiUrl}/${candidateId}`);
  }
}
