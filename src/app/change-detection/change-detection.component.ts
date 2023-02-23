import { AfterViewChecked, Component, DoCheck } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectionFirstComponent } from './change-detection-first/change-detection-first.component';
import { ChangeDetectionSecondComponent } from './change-detection-second/change-detection-second.component';
import { Logger } from '../logger/logger';
import { ConvertPipe } from '../pipes/convert.pipe';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss'],
  imports: [
    CommonModule,
    ChangeDetectionFirstComponent,
    ChangeDetectionSecondComponent,
    ConvertPipe
  ],
})
export class ChangeDetectionComponent extends Logger implements DoCheck, AfterViewChecked {
  constructor() {
    super(ChangeDetectionComponent);
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }
}
