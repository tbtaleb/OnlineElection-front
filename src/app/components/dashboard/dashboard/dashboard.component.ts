import { Component } from '@angular/core';
import { AdminListCandidatsComponent } from "../admin-list-candidats/admin-list-candidats.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AdminListCandidatsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
