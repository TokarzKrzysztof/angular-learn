import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectionFirstDeepComponent } from "./change-detection-first-deep/change-detection-first-deep.component";
import { Logger } from 'src/app/logger/logger';

@Component({
    selector: 'app-change-detection-first',
    standalone: true,
    templateUrl: './change-detection-first.component.html',
    styleUrls: ['./change-detection-first.component.scss'],
    imports: [CommonModule, ChangeDetectionFirstDeepComponent]
})
export class ChangeDetectionFirstComponent extends Logger {
  constructor() {
    super(ChangeDetectionFirstComponent);
  }
}
