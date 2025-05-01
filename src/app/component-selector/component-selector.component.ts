import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentSelectorClassComponent } from 'src/app/component-selector/component-selector-class/component-selector-class.component';

@Component({
  selector: 'app-component-selector',
  standalone: true,
  imports: [CommonModule, ComponentSelectorClassComponent],
  template: `
    <!-- <div app-test=23></div> -->
    <app-test class="tst" [abc]="11"></app-test>
    <!-- <div [attr.app-test]='23'></div> -->
    <!-- <button (click)="">toggle class</button> -->
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class ComponentSelectorComponent {
// aaa = 'test'
}
