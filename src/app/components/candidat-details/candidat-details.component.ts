import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidateService } from '../../services/candidate.service';
import { CommentService } from '../../services/comment.service';
import { FavoriteService } from '../../services/favorite.service';
import { VoteService } from '../../services/vote.service';
import { Candidate } from '../../models/candidate.model';
import { Comment } from '../../models/comment.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-candidat-details',
  standalone: true,
  imports: [DialogModule, CommonModule, TooltipModule, FormsModule],
  templateUrl: './candidat-details.component.html',
  styleUrls: ['./candidat-details.component.css'],
  providers: [CandidateService, CommentService, FavoriteService, VoteService],
})
export class CandidatDetailsComponent implements OnInit {
  candidate!: Candidate;
  comments: Comment[] = [];
  alreadyFavorite: boolean = false;
  visible: boolean = false;
  newComment: string = '';

  constructor(
    private route: ActivatedRoute,
    private candidateService: CandidateService,
    private commentService: CommentService,
    private favoriteService: FavoriteService,
    private voteService: VoteService
  ) {}

  ngOnInit(): void {
    const candidateId = this.route.snapshot.paramMap.get('id')!;
    this.getCandidate(candidateId);
    this.getComments(candidateId);
  }

  getCandidate(id: string): void {
    this.candidateService.getCandidate(id).subscribe({
      next: (candidate) => {
        this.candidate = candidate;
      },
      error: (error) => {
        console.error('Error fetching candidate:', error);
      },
    });
  }

  getComments(candidateId: string): void {
    this.commentService.getComments(candidateId).subscribe({
      next: (comments) => {
        this.comments = comments;
      },
      error: (error) => {
        console.error('Error fetching comments:', error);
      },
    });
  }

  addComment(): void {
    const comment: Comment = {
      user: 'currentUserId', // Replace with actual user ID
      candidate: this.candidate._id!,
      content: this.newComment,
    };
    this.commentService.addComment(comment).subscribe({
      next: (newComment) => {
        this.comments.push(newComment);
        this.newComment = '';
      },
      error: (error) => {
        console.error('Error adding comment:', error);
      },
    });
  }

  toggleFavorite(): void {
    if (this.alreadyFavorite) {
      this.favoriteService.removeFavorite(this.candidate._id!).subscribe({
        next: () => {
          this.alreadyFavorite = false;
        },
        error: (error) => {
          console.error('Error removing favorite:', error);
        },
      });
    } else {
      this.favoriteService.addFavorite(this.candidate._id!).subscribe({
        next: () => {
          this.alreadyFavorite = true;
        },
        error: (error) => {
          console.error('Error adding favorite:', error);
        },
      });
    }
  }

  confirmVote(): void {
    this.visible = !this.visible;
  }

  castVote(): void {
    this.voteService.castVote(this.candidate._id!).subscribe({
      next: () => {
        console.log('Vote cast successfully');
        this.visible = false;
      },
      error: (error) => {
        console.error('Error casting vote:', error);
      },
    });
  }
}
