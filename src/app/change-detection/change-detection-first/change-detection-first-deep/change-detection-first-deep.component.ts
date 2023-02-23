import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Logger } from 'src/app/logger/logger';

@Component({
  selector: 'app-change-detection-first-deep',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './change-detection-first-deep.component.html',
  styleUrls: ['./change-detection-first-deep.component.scss'],
})
export class ChangeDetectionFirstDeepComponent extends Logger {
  constructor() {
    super(ChangeDetectionFirstDeepComponent);
  }
}
