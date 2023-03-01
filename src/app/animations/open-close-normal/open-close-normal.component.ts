import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animation, style, animate, trigger, transition, useAnimation } from '@angular/animations';

export const transitionAnimation = animation([
  style({
    height: '{{ height }}',
    opacity: '{{ opacity }}',
    backgroundColor: '{{ backgroundColor }}'
  }),
  animate('{{ time }}')
]);

export const triggerAnimation = trigger('openClose', [
  transition('open => closed', [
    useAnimation(transitionAnimation, {
      params: {
        height: 0,
        opacity: 1,
        backgroundColor: 'red',
        time: '1s'
      }
    })
  ])
]);

@Component({
  selector: 'app-open-close-normal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav>
      <button type="button" (click)="toggle()">Toggle Open/Close</button>
    </nav>

    <div class="open-close-container" [ngClass]="{ opened: isOpen }">
      <p>The box is now {{ isOpen ? 'Open' : 'Closed' }}!</p>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        margin-top: 1rem;
      }

      .open-close-container {
        border: 1px solid #dddddd;
        margin-top: 1em;
        padding: 20px 20px 0px 20px;
        color: #000000;
        font-weight: bold;
        font-size: 20px;
        height: 100px;
        opacity: 0.8;
        background: blue;
        transition: 1s linear;
      }
      .open-close-container.opened {
        height: 200px;
        opacity: 1;
        background: yellow;
        transition: 0.5s linear;
      }
    `,
  ],
})
export class OpenCloseNormalComponent {
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
