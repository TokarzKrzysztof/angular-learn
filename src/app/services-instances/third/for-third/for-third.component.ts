import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomeService } from '../../some.service';

@Component({
  selector: 'app-for-third',
  templateUrl: './for-third.component.html',
  styleUrls: ['./for-third.component.scss'],
})
export class ForThirdComponent {
  constructor(private s: SomeService){
    console.log(s )
  }
}
