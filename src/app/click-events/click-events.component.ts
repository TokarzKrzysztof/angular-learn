import { Component } from '@angular/core';
import { ClickEventsChildComponent } from './click-events-child/click-events-child.component';

@Component({
  selector: 'app-click-events',
  imports: [ClickEventsChildComponent],
  templateUrl: './click-events.component.html',
  styleUrl: './click-events.component.scss',
  // host: {
  //   '*ngIf': 'false',
  // },
  hostDirectives: []
})
export class ClickEventsComponent {
  console = console;
}
