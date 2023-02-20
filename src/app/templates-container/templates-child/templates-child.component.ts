import { Component, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-templates-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './templates-child.component.html',
  styleUrls: ['./templates-child.component.scss']
})
export class TemplatesChildComponent {
  /**
   *
   */
  constructor(public viewContainerRef: ViewContainerRef) {
    
  }
}
