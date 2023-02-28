import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';

export const SOMETHING = new InjectionToken<string>('something');

@Injectable()
export class SomeViewService {
  constructor(@Inject(SOMETHING) public something: string) {}

  log() {
    console.log("from service " + this.something)
  }
}
