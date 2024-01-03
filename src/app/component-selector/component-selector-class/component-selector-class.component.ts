import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test:not(.test)',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      component-selector-class works! {{abc}}
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
export class ComponentSelectorClassComponent {
  @Input() abc: number;
}