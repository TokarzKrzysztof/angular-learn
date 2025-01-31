import { Component } from '@angular/core';
import { SomeService } from '../../some.service';

@Component({
  selector: 'app-for-second2',
  templateUrl: './for-second2.component.html',
  styleUrls: ['./for-second2.component.scss'],
  standalone: false,
})
export class ForSecond2Component {
  constructor(private s: SomeService) {
    console.log(s);
  }
}
