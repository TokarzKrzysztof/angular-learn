import { Component, Injector } from '@angular/core';
import { HostService } from 'src/app/resolution-modifiers/host.service';
import { SomeDirective } from 'src/app/resolution-modifiers/some.directive';
import { ResolutionModifiersFirstComponent } from './resolution-modifiers-first/resolution-modifiers-first.component';
import { ResolutionModifiersSecondComponent } from './resolution-modifiers-second/resolution-modifiers-second.component';
import { ResolutionModifiersThirdComponent } from './resolution-modifiers-third/resolution-modifiers-third.component';

@Component({
  selector: 'app-resolution-modifiers',
  standalone: true,
  template: `
    <app-resolution-modifiers-third> </app-resolution-modifiers-third>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  imports: [
    ResolutionModifiersFirstComponent,
    ResolutionModifiersSecondComponent,
    ResolutionModifiersThirdComponent,
    SomeDirective,
  ],
  providers: [{provide: HostService, useValue: 'from providers HostService'}],
  viewProviders: [{provide: HostService, useValue: 'from viewProviders HostService'}]
})
export class ResolutionModifiersComponent {
  constructor(private host: HostService, private injector: Injector) {
    console.log({host})
    console.log({injector})
    setInterval(() => {}, 1000);
  }
}
