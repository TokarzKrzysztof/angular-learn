import { Component } from '@angular/core';
import { SomeService } from '../../some.service';

@Component({
  selector: 'app-for-second',
  templateUrl: './for-second.component.html',
  styleUrls: ['./for-second.component.scss'],
  standalone: false
})
export class ForSecondComponent {
  constructor(private s: SomeService){
    console.log(s )
  }
}
