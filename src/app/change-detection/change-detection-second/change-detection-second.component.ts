import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectionSecondDeepComponent } from './change-detection-second-deep/change-detection-second-deep.component';
import { Logger } from 'src/app/logger/logger';

@Component({
  selector: 'app-change-detection-second',
  standalone: true,
  templateUrl: './change-detection-second.component.html',
  styleUrls: ['./change-detection-second.component.scss'],
  imports: [CommonModule, ChangeDetectionSecondDeepComponent],
})
export class ChangeDetectionSecondComponent extends Logger {
  constructor() {
    super(ChangeDetectionSecondComponent);
  }
}
