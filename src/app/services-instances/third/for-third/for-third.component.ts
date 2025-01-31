import { Component } from '@angular/core';
import { SomeService } from '../../some.service';

@Component({
  selector: 'app-for-third',
  templateUrl: './for-third.component.html',
  styleUrls: ['./for-third.component.scss'],
  standalone: false
})
export class ForThirdComponent {
  constructor(private s: SomeService){
    console.log(s )
  }
}
