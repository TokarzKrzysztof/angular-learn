import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-security',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h4>An untrusted URL:</h4>
    <p><a class="e2e-dangerous-url" [href]="dangerousUrl">Click me</a></p>
    <h4>A trusted URL:</h4>
    <p><a class="e2e-trusted-url" [href]="trustedUrl">Click me</a></p>

    <p [innerHTML]="html"></p>

    <!-- <iframe
      class="e2e-iframe-untrusted-src"
      width="640"
      height="390"
      src="https://www.youtube.com/watch?v=UY0AxFZXuWY"
    ></iframe> -->

    <iframe
      width="420"
      height="315"
      src="https://www.youtube.com/embed/UY0AxFZXuWY"
    >
    </iframe>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class SecurityComponent {
  dangerousUrl = 'javascript:alert("Hi there")';
  trustedUrl = inject(DomSanitizer).bypassSecurityTrustUrl(this.dangerousUrl);
  html = inject(DomSanitizer).bypassSecurityTrustHtml(
    "<p>Test test <script>alert('0wned')</script></p>"
  );

  constructor(private fb: FormBuilder) {
    // fb.control()
  }
}


// ERROR
export let foo: number = 2; // neither exported nor initialized

@Component({
  selector: 'my-component',
  template:'',
  providers: [
    { provide: SecurityComponent, useValue: foo }
  ]
})
export class MyComponent {}