import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
@Component({
  selector: 'app-candidat-details',
  standalone: true,
  imports: [DialogModule,CommonModule,TooltipModule],
  templateUrl: './candidat-details.component.html',
  styleUrl: './candidat-details.component.css'
})
export class CandidatDetailsComponent {
  alreadyFavorite: boolean = false;
  visible: boolean = false;
  confirmVote() {
    this.visible = !this.visible;
  }
  fav() {
   this.alreadyFavorite =!this.alreadyFavorite;
  }
}
