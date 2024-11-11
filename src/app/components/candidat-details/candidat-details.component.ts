import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { DialogModule } from 'primeng/dialog';
@Component({
  selector: 'app-candidat-details',
  standalone: true,
  imports: [DialogModule,CommonModule],
  templateUrl: './candidat-details.component.html',
  styleUrl: './candidat-details.component.css'
})
export class CandidatDetailsComponent {

  visible: boolean = false;
  confirmVote() {
    this.visible = !this.visible;
  }
  toggleDialogue() {
   
  }
}
