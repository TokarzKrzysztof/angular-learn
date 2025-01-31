import { Directive } from '@angular/core';
import { HostService } from 'src/app/resolution-modifiers/host.service';

@Directive({
  selector: '[appSome]',
  standalone: true,
  providers: [
    {
      provide: HostService,
      useFactory: () => {
        console.log('inject from SomeDirective');
        return 'host service SomeDirective';
      },
    },
  ],
})
export class SomeDirective {
  constructor() {}
}
