import { Component, Host, Self } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoveWrapperDirective, SomethingDirective } from '../style-encap/remove-wrapper.directive';
import { SomeService } from '../services-instances/some.service';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, SomethingDirective],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  hostDirectives: [RemoveWrapperDirective],
  providers: [{provide:SomeService, useClass: SomeService}]
})
export class ButtonComponent {
  constructor(@Self() private s: SomeService) {
    s.from = 'component'
    setTimeout(() => {
      console.log(s)
    }, 2000);
  }
}
