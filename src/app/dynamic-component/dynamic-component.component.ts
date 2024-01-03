import { CommonModule } from '@angular/common';
import { ApplicationRef, Component, NgZone } from '@angular/core';
import { DynamicComponentChildComponent } from 'src/app/dynamic-component/dynamic-component-child/dynamic-component-child.component';

@Component({
  selector: 'app-dynamic-component',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container
      *ngComponentOutlet="DynamicComponentChildComponent"
    ></ng-container>
    <span>{{ inputs | json }}</span>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class DynamicComponentComponent {
  inputs = { test: 23 };
  DynamicComponentChildComponent = DynamicComponentChildComponent;

  constructor(private zone: NgZone, private appRef: ApplicationRef) {
    this.zone.runOutsideAngular(() => {
      setInterval(() => {
        this.inputs.test++;
        console.log(this.inputs.test)
        if(this.inputs.test % 10 === 0) {
          // this.appRef.tick();
          this.zone.run(() => {})
        }
      }, 500);
    })
  }
}
