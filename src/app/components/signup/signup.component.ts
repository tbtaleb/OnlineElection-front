import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { CommonModule } from '@angular/common';
import { PasswordModule } from 'primeng/password';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [PasswordModule,
    StepperModule,
    ButtonModule,
    InputTextModule,
    ToggleButtonModule,
    IconFieldModule,
    InputIconModule,
    CommonModule, FormsModule, ReactiveFormsModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      FullName: [
        '',
        [Validators.required, Validators.minLength(3)],
      ],
      Birthday: ['', Validators.required],
      gender: ['', Validators.required],
      numTel: [
        '',
        [Validators.required, Validators.minLength(8), Validators.maxLength(8)],
      ],
      cin: [
        '',
        [Validators.required, Validators.minLength(8), Validators.maxLength(8)],
      ],
      email: [
        '',
        [Validators.required, Validators.email],
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(6)],
      ],
      confirmMotPasse: ['', Validators.required],
    },
      {
        validator: this.matchPasswords('password', 'confirmMotPasse')
      });
  }

  // Custom validator to check if passwords match
  matchPasswords(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passControl = formGroup.controls[password];
      const confirmPassControl = formGroup.controls[confirmPassword];
      if (confirmPassControl.errors && !confirmPassControl.errors['mismatch']) {
        return;
      }
      if (passControl.value !== confirmPassControl.value) {
        confirmPassControl.setErrors({ mismatch: true });
      } else {
        confirmPassControl.setErrors(null);
      }
    };
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.signupForm.valid) {
      console.log('Form submitted:', this.signupForm.value);

    } else {
      console.log('Form is invalid');
    }
  }
}
