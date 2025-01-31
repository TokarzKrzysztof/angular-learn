import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { CachingService } from 'src/app/http-caching/caching.service';

@Component({
  selector: 'app-http-caching',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  template: ` <p>{{ cachingService.todos$ | async | json }}</p>
    <button #btn>Reload</button>`,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class HttpCachingComponent {
  @ViewChild('btn') button: ElementRef<HTMLButtonElement>;

  constructor(protected cachingService: CachingService, private zone: NgZone) {
    
    cachingService.todos$.subscribe(console.log);
    cachingService.todos$.subscribe(console.log);
    cachingService.todos$.subscribe(console.log);
    cachingService.todos$.subscribe(console.log);
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      this.button.nativeElement.addEventListener('click', () => {
        this.cachingService.reload();
        this.cachingService.todos$.subscribe(() => {
          this.zone.run(() => {})
        })
      })
    })
  }

  reload() {
    this.cachingService.reload();
  }
}
