import { NgIf } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { ClickEventsChildComponent } from './click-events-child/click-events-child.component';

@Component({
  selector: 'app-click-events',
  imports: [ClickEventsChildComponent, NgIf],
  templateUrl: './click-events.component.html',
  styleUrl: './click-events.component.scss',
  providers: [TemplateRef as any],
  // host: {
  //   '*ngIf': 'false',
  // },
  hostDirectives: [NgIf]
})
export class ClickEventsComponent {
  console = console;
}
