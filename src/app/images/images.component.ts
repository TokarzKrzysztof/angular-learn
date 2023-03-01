import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-images',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      images works!
    </p>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class ImagesComponent {

}
