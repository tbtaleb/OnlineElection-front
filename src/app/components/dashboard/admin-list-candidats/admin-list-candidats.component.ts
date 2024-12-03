import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

import { SpeedDialModule } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';
@Component({
  selector: 'app-admin-list-candidats',
  standalone: true,
  imports: [TableModule,ToastModule,SpeedDialModule ],
  templateUrl: './admin-list-candidats.component.html',
  styleUrl: './admin-list-candidats.component.css'
})
export class AdminListCandidatsComponent {
  //IMPORTANT: fl function ta3 ng onitin wala whenever u get the candidates 7ot loading = false
  loading: boolean = true;
  searchValue: string | undefined;
  filteredCandidates:any[] =[];
  candidates: any[] = [
    {
      id: 1,
      name: 'John Doe',
      party: 'Independent',
      biography: 'Passionate about improving education and healthcare.',
      electoralProgram: 'Increase funding for schools and hospitals.',
      profilePicture: 'https://via.placeholder.com/50',
    },
    {
      id: 2,
      name: 'Jane Smith',
      party: 'Democratic Party',
      biography: 'Advocate for climate change and renewable energy.',
      electoralProgram: 'Promote clean energy projects and reduce emissions.',
      profilePicture: 'https://via.placeholder.com/50',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      party: 'Republican Party',
      biography: 'Focus on strengthening national security.',
      electoralProgram: 'Expand border protection and defense spending.',
      profilePicture: 'https://via.placeholder.com/50',
    },
  ];

  ngOnInit() {
    this.loading=false
    this.filteredCandidates=this.candidates
  }
  onSearchChange(event: Event) {
    const input = (event.target as HTMLInputElement).value.toLowerCase();
    if (input === '') {
      this.filteredCandidates = this.candidates;
    } else {
      this.filteredCandidates = this.candidates.filter(
        (data) =>
          (data.name ? data.name.toLowerCase().includes(input) : false) ||
          (data.party ? data.party.toLowerCase().includes(input) : false)
      );
    }
  }
}
