import { Component } from '@angular/core';
import { SomeViewService } from '../some-view.service';

@Component({
  selector: 'app-view-nested',
  template: `
    <p>view-nested works!</p>
    <ng-content></ng-content>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  providers: [
    {
      provide: SomeViewService,
      useFactory: () => {
        return new SomeViewService('test');
      },
    },
  ],
  standalone: true,
})
export class ViewNestedComponent {
  constructor() {}
}
