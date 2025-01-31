import { Component } from '@angular/core';
import { SomeService } from '../services-instances/some.service';

@Component({
  selector: 'app-no-standalone',
  templateUrl: './no-standalone.component.html',
  styleUrls: ['./no-standalone.component.scss'],
  providers: [SomeService],
  standalone: false
})
export class NoStandaloneComponent {
constructor(private someService: SomeService){
  console.log(someService.random)
}
}
