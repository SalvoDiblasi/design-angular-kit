import { Component } from '@angular/core';

@Component({
  selector: 'it-password-input-example',
  templateUrl: './password-input-example.component.html',
  standalone: false,
})
export class PasswordInputExampleComponent {
  password?: string;
  passwordText?: string;
  passwordStrengthMeter?: string;
}
