import { Component, Host } from '@angular/core';
import { HostService } from 'src/app/resolution-modifiers/host.service';

@Component({
  selector: 'app-resolution-modifiers-first',
  standalone: true,
  imports: [],
  template: `
    <p>
      resolution-modifiers-first works!
    </p>
  `,
  styles: `
    :host {
      display: block;
    }
  `
})
export class ResolutionModifiersFirstComponent {
  constructor( @Host() private hostService: HostService) {}
}
