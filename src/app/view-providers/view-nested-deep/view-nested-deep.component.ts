import { Component, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomeViewService } from '../some-view.service';

@Component({
  selector: 'app-view-nested-deep',
  template: ` <p>view-nested-deep works!</p> `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  standalone: true
})
export class ViewNestedDeepComponent {
  constructor( private s: SomeViewService) {
    s.log();
  }
}
