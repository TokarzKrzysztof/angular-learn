import { Component, Injectable, InjectionToken, inject } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable()
export class MockService {
  getSth() {
    return of(100).pipe(delay(2000));
  }
}
export const TOKEN = new InjectionToken('token');

@Component({
  selector: 'app-tests',
  standalone: true,
  imports: [],
  templateUrl: './tests.component.html',
  styleUrl: './tests.component.scss',
  providers: [
    MockService,
    { provide: TOKEN, useValue: 2312312312 },
    // TOKEN
  ],
})
export class TestsComponent {
  someProp?: number;
  asyncProp?: number;

  mockService = inject(MockService);
  asdasdas = inject(TOKEN);

  ngOnInit() {
    this.someProp = 23;
    console.log(this.asdasdas);
    this.mockService.getSth().subscribe((valye) => {
      this.asyncProp = valye;
    });
  }
}
