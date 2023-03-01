import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { OpenCloseComponent } from './open-close/open-close.component';
import { OpenCloseNormalComponent } from './open-close-normal/open-close-normal.component';

@Component({
  selector: 'app-animations',
  standalone: true,
  template: `
    <p>animations works!</p>
    <app-open-close></app-open-close>
    <app-open-close-normal></app-open-close-normal>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  imports: [CommonModule, OpenCloseComponent, OpenCloseNormalComponent],
})
export class AnimationsComponent {}
