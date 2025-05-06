import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, inject } from '@angular/core';
import { ChangeDetectionOnpushChildComponent } from "./change-detection-onpush-child/change-detection-onpush-child.component";

@Component({
  selector: 'app-change-detection-onpush',
  templateUrl: './change-detection-onpush.component.html',
  styleUrl: './change-detection-onpush.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ChangeDetectionOnpushChildComponent]
})
export class ChangeDetectionOnpushComponent implements DoCheck {
  // @Input() count: number
  cdr = inject(ChangeDetectorRef)

  constructor() {
    // markOnCheck mark component for check and all of ancestors
    // when component is not checked then all of children ngDoCheck is not called
  }
  
  ngDoCheck(): void {
   
    console.log('do check ChangeDetectionOnpushComponent')
  }

}
