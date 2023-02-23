import { Component, Input, Optional, Self } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomeService } from 'src/app/services-instances/some.service';

@Component({
  selector: 'app-deeper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deeper.component.html',
  styleUrls: ['./deeper.component.scss'],
  providers: [SomeService]
})
export class DeeperComponent {
  currentStyles = {
    'font-style': true ? 'italic' : 'normal',
    color: false ? 'red' : 'black',
    'font-size': true ? '24px' : '12px',
  };
  @Input() callback: () => Promise<void>;

  /**
   *
   */
  constructor(@Self() private s: SomeService) {
    setTimeout(() => {
      console.log(s.from)
    }, 4000);
    
  }

  test() {
    this.callback().then(() => {
      console.log('callback complete');
    });
  }
}
