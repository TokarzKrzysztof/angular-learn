import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';

@Component({
  selector: 'app-change-detection-onpush-deep',
  imports: [],
  templateUrl: './change-detection-onpush-deep.component.html',
  styleUrl: './change-detection-onpush-deep.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionOnpushDeepComponent {
 console = console;
  cdr = inject(ChangeDetectorRef);
  /**
   *
   */
  constructor() {
    // setInterval(() => {
    //   // this.cdr.detectChanges();
    // }, 1000);
    
    // setInterval(() => {
    //   this.cdr.markForCheck();
    // }, 1000);
  }
  ngDoCheck(): void {
    console.log('do check ChangeDetectionOnpushDeepComponent');
  }
}
