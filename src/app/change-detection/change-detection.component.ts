import { CommonModule } from '@angular/common';
import { AfterViewChecked, Component, DoCheck } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Logger } from '../logger/logger';
import { ConvertPipe } from '../pipes/convert.pipe';
import { ChangeDetectionSecondComponent } from './change-detection-second/change-detection-second.component';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss'],
  imports: [CommonModule, ConvertPipe, ChangeDetectionSecondComponent, ReactiveFormsModule],
})
export class ChangeDetectionComponent extends Logger implements DoCheck, AfterViewChecked {
  nameControl = new FormControl('', { nonNullable: true });

  constructor() {
    super(ChangeDetectionComponent);
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
}
