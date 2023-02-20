import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Logger } from '../logger/logger';
import { TemplatesChildComponent } from "./templates-child/templates-child.component";

@Component({
    selector: 'app-templates-container',
    standalone: true,
    templateUrl: './templates-container.component.html',
    styleUrls: ['./templates-container.component.scss'],
    imports: [CommonModule, TemplatesChildComponent]
})
export class TemplatesContainerComponent extends Logger {
  @ViewChild(TemplatesChildComponent) child: TemplatesChildComponent;

  constructor(private viewContainerRef: ViewContainerRef) {
    super(TemplatesContainerComponent);
  }
aaa = 2;
  loadChild() {
    const instance = this.child.viewContainerRef.createComponent(TemplatesContainerComponent)
  }
}
