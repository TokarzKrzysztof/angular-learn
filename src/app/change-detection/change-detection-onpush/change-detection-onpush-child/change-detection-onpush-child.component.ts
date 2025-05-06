import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';

@Component({
  selector: 'app-change-detection-onpush-child',
  templateUrl: './change-detection-onpush-child.component.html',
  styleUrl: './change-detection-onpush-child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeDetectionOnpushChildComponent {
  console = console;
  cdr = inject(ChangeDetectorRef);
  /**
   *
   */
  constructor() {
   
  }
  ngDoCheck(): void {
    console.log('do check ChangeDetectionOnpushChildComponent');
  }
}
