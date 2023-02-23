import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomeService } from '../../some.service';

@Component({
  selector: 'app-for-second2',
  templateUrl: './for-second2.component.html',
  styleUrls: ['./for-second2.component.scss']
})
export class ForSecond2Component {
  constructor(private s: SomeService){
    console.log(s )
  }
}
