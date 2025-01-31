import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentSelectorClassComponent } from 'src/app/component-selector/component-selector-class/component-selector-class.component';

@Component({
  selector: 'app-component-selector',
  standalone: true,
  imports: [CommonModule, ComponentSelectorClassComponent],
  templateUrl: './aaa.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class ComponentSelectorComponent {
  // @ViewChild(ComponentSelectorClassComponent) aaa: any
  // aaa = 'test'
}
