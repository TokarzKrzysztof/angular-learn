import { CommonModule } from '@angular/common';
import { Component, Inject, InjectionToken } from '@angular/core';

interface Test {
  test: number;
}

const TOKEN1 = new InjectionToken<Test>('test', {
  providedIn: 'root',
  factory: () => ({ test: 10 }),
});
const TOKEN2 = new InjectionToken<Test>('test2', {
  providedIn: 'root',
  factory: () => ({ test: 20 }),
});

@Component({
  selector: 'app-injection-tokens',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './injection-tokens.component.html',
  styleUrls: ['./injection-tokens.component.scss'],
  providers: [
    {provide: '23', useValue: 300000}
  ]
})
export class InjectionTokensComponent {
  constructor(
    @Inject('23') public token1: Test,
  ) {
    console.log(token1);

  }
}
