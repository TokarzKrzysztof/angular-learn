import { Component, Inject, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Test {
  test: number;
}

const TOKEN1 = new InjectionToken<Test>('token1', {
  providedIn: 'root',
  factory: () => ({ test: 10 }),
});
const TOKEN2 = new InjectionToken<Test>('token2', {
  providedIn: 'root',
  factory: () => ({ test: 20 }),
});

@Component({
  selector: 'app-injection-tokens',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './injection-tokens.component.html',
  styleUrls: ['./injection-tokens.component.scss'],
  providers: [{provide: "test", useValue: 'asdasdasasd'}]
})
export class InjectionTokensComponent {
  constructor(
    @Inject("test") public token1: Test,
    @Inject(TOKEN2) public token2: Test
  ) {
    console.log(token1);
    console.log(token2);
  }
}
