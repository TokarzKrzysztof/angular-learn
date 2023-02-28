import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  Validators,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';

type NoNullable<T extends Record<string, any>> = {
  [P in keyof T]: Exclude<T[P], null>;
};

const xx: NoNullable<{ test: string | null }> = {
  test: 'null',
};

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <p>forms works!</p>
    <input [formControl]="formGroup.controls.firstName" />
    <p *ngIf="formGroup.controls.firstName.hasError('required')">required</p>
    <p *ngIf="formGroup.controls.firstName.hasError('minlength')">minlength</p>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class FormsComponent {
  formGroup = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(10)]],
  });

  constructor(private fb: FormBuilder) {
    setInterval(() => {
      console.log(this.formGroup.get("firstName")?.errors)
      console.log(this.formGroup.get("firstName")?.hasError('minLength'))
    }, 1000)
    this.formGroup.valueChanges.subscribe(console.log)
  }
}
