import { Component, Host, Optional } from '@angular/core';
import { HostService } from 'src/app/resolution-modifiers/host.service';

@Component({
  selector: 'app-resolution-modifiers-second',
  standalone: true,
  imports: [],
  template: `
    <p>
      resolution-modifiers-second works!
    </p>
  `,
  styles: `
    :host {
      display: block;
    }
  `
})
export class ResolutionModifiersSecondComponent {
  constructor(@Optional() @Host() private hostService: HostService) {
    console.log(hostService)
  }
}
