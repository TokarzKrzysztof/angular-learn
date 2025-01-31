import { Component, Host, Optional } from '@angular/core';
import { HostService } from 'src/app/resolution-modifiers/host.service';
import { ResolutionModifiersSecondComponent } from '../resolution-modifiers-second/resolution-modifiers-second.component';

@Component({
  selector: 'app-resolution-modifiers-third',
  standalone: true,
  template: `
    <app-resolution-modifiers-second></app-resolution-modifiers-second>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  imports: [ResolutionModifiersSecondComponent],
})
export class ResolutionModifiersThirdComponent {
  constructor(@Optional() @Host() private hostService: HostService, private noHost: HostService) {
    console.log({hostService});
    console.log({noHost});
  }
}
