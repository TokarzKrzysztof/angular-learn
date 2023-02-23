import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Logger } from 'src/app/logger/logger';

@Component({
  selector: 'app-change-detection-second-deep',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './change-detection-second-deep.component.html',
  styleUrls: ['./change-detection-second-deep.component.scss'],
})
export class ChangeDetectionSecondDeepComponent extends Logger {
  constructor() {
    super(ChangeDetectionSecondDeepComponent);
  }
}
