import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { delay } from 'rxjs';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss',
})
export class SignalsComponent {
  private httpClient = inject(HttpClient);

  // resul23t = toSignal(this.httpClient.get<unknown>(`http://swapi.dev/api/planets/1/`));
  result = toSignal(this.httpClient.get<{ created: string }>(`https://swapi.dev/api/people/7/`).pipe(delay(3000)), {
    // initialValue: { created: 'test' },
  });
  // result2 = toSignal(this.httpClient.get<unknown>(`https://swapi.dev/api/people/8/`));
  // result3 = toSignal(this.httpClient.get<unknown>(`https://swapi.dev/api/people/9/`));
  // result4 = toSignal(this.httpClient.get<unknown>(`https://swapi.dev/api/people/10/`));
}
