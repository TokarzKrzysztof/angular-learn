import { Directive } from '@angular/core';

@Directive({
  selector: '[appTestDire]',
  standalone: true
})
export class TestDireDirective {

  constructor() {
    console.log("dire create")
  }

}
