import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { TableModule } from 'primeng/table';
import { SpeedDialModule } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [TableModule, ToastModule, SpeedDialModule, DialogModule,ReactiveFormsModule],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent {

  changeInfoForm!: FormGroup;
  formSubmitted = false;
  errorMessage: string | null = null;
  show: boolean = false;
  user: any
  candidate: any
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

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.changeInfoForm = this.fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
      }
    );
  }

  editUser(arg0: any) {
    this.show = !this.show
  }

  onSubmit(): void {
    this.formSubmitted = true;
    if (this.changeInfoForm.invalid) {
      return;
    }
    console.log(this.changeInfoForm.value);
    this.show = !this.show
  }
  cancelCh(){
    this.show = !this.show
  }
}
