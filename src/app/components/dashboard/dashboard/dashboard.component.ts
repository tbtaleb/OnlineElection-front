import { Component } from '@angular/core';
import { AdminListCandidatsComponent } from "../admin-list-candidats/admin-list-candidats.component";
import { AdminFormCandidatsComponent } from "../admin-form-candidats/admin-form-candidats.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AdminListCandidatsComponent, AdminFormCandidatsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
