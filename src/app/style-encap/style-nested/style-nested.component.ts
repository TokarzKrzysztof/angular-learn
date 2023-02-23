import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoveWrapperDirective } from '../remove-wrapper.directive';

@Component({
  selector: 'app-style-nested',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './style-nested.component.html',
  styleUrls: ['./style-nested.component.scss'],
  hostDirectives: [RemoveWrapperDirective]

})
export class StyleNestedComponent {

}
