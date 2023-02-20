import { Component, Directive, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

export class Logger {
  private readonly name: string;
  constructor(parent: Type<unknown>) {
    this.name = parent.name;
  }

  log(additional: string = '') {
    console.log(this.name + additional);
  }
}
