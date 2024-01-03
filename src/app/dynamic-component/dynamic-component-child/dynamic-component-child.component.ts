import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-component-child',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      dynamic-component-child works {{test}}!
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
export class DynamicComponentChildComponent {
  @Input() test: number;
}
