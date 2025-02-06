import { Component } from '@angular/core';

@Component({
  selector: 'app-constructor-not-called',
  imports: [],
  templateUrl: './constructor-not-called.component.html',
  styleUrl: './constructor-not-called.component.scss'
})
export class ConstructorNotCalledComponent {
/**
 *
 */
constructor() {
  console.log('ctor')
  
}
ngOnInit() {
  console.log('init')
}
}
