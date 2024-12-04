import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-form-candidats',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './admin-form-candidats.component.html',
  styleUrl: './admin-form-candidats.component.css'
})
export class AdminFormCandidatsComponent {
  candidateForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.candidateForm = this.fb.group({
      name: ['', Validators.required],
      party: ['', Validators.required],
      biography: ['', Validators.required],
      electoralProgram: ['', Validators.required],
      profilePicture: [''],
    });
  }

  onSubmit(){
    if (this.candidateForm.valid) {
      console.log(this.candidateForm.value);
      alert('Form submitted successfully!');
    } else {
      alert('Please fill out all required fields.');
    }
  }
}
