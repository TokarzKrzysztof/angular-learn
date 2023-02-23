import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomeService } from '../../some.service';

@Component({
  selector: 'app-for-second',
  templateUrl: './for-second.component.html',
  styleUrls: ['./for-second.component.scss']
})
export class ForSecondComponent {
  constructor(private s: SomeService){
    console.log(s )
  }
}
