import { Type } from '@angular/core';

export class Logger {
  private readonly name: string;
  constructor(parent: Type<unknown>) {
    this.name = parent.name;
  }

  log(additional: string = '') {
    console.log(this.name + additional);
  }
}
