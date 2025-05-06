import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, input } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { catchError, of, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-input-output',
  standalone: true,
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss'],
  imports: [CommonModule],
})
export class InputOutputComponent {
  private httpClient = inject(HttpClient);
  element: { created: string };
  destroy$ = new Subject<void>();

  id = input.required<number>();

  result$ = toObservable(this.id).pipe(
    switchMap((id) => {
      return (
        this.httpClient
          .get<{ created: string }>(`https://swapi.dev/api/people/${id}/`)
          // error in the stream destroys and no value from this.id is given!
          .pipe(catchError(() => of({ created: 'error' })))
      );
    }),
  );

  /**
   *
   */
  constructor() {}

  ngOnInit() {}

  callbackFn() {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log('before resolve');
        resolve();
      }, 2000);
    });
  }
}
