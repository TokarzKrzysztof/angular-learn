import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { CachingService } from 'src/app/http-caching/caching.service';

@Component({
  selector: 'app-http-caching-third',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  template: ` <p>{{ cachingService.todos$ | async | json }}</p> `,

  styles: `
    :host {
      display: block;
    }
  `,
})
export class HttpCachingThirdComponent {
  constructor(protected cachingService: CachingService) {}
}
