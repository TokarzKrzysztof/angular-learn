import { HttpClient } from '@angular/common/http';
import { Component, effect, inject, resource, signal, untracked } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { rxResource, toObservable } from '@angular/core/rxjs-interop';
import { toSignal } from '@angular/core/rxjs-interop';
import { debounceTime, delay, filter, startWith } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-resource-api',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './resource-api.component.html',
  styleUrl: './resource-api.component.scss',
})
export class ResourceApiComponent {
  // https://swapi.dev/api/people/1/

  httpClient = inject(HttpClient);
  idControl = new FormControl(1);
  id = toSignal(
    this.idControl.valueChanges.pipe(
      debounceTime(1000),
      filter((x) => !!x),
    ),
  );

  swResource = rxResource<unknown, number | null | undefined>({
    // Define a reactive request computation.
    // The request value recomputes whenever any read signals change.
    request: this.id,
    // Define an async loader that retrieves data.
    // The resource calls this function every time the `request` value changes.
    loader: ({ request, previous }) => {
      console.log(previous.status)
      return this.httpClient.get<unknown>(`https://swapi.dev/api/people/${request ?? 1}/`).pipe(delay(1000));
    },
  });

  idEffect = effect(() => {
    console.log(this.id());
    console.log(this.swResource.value());
    untracked(() => {});
    this.swResource.destroy
    // console.log(this.id());
  });

  constructor() {
    effect(() => {
      // if (this.swResource.isLoading()) {
      //   this.idControl.disable();
      // } else {
      //   this.idControl.enable();
      // }
    });
  }
}
