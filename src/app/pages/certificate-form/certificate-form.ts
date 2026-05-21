import { Component } from '@angular/core';
import { PrimaryButton } from "../../components/primary-button/primary-button";
import { SecondaryButton } from "../../components/secondary-button/secondary-button";
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificate-form',
  imports: [SecondaryButton, PrimaryButton, FormsModule, CommonModule],
  templateUrl: './certificate-form.html',
  styleUrl: './certificate-form.css',
})
export class CertificateForm {
  name: string = ""
  activity: string = ""
  activities: string[] = []

  campoInvalido(control: NgModel) {
    return control.invalid && control.touched
  }

  formValid() {
    return this.activities.length > 0 && this.name.length > 0;
  }

  addActivity() {
    this.activities.push(this.activity);
    this.activity = '';
  }

  removeActivity(index: number) {
    this.activities.splice(index, 1);
  }
}
