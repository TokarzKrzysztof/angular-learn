import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, effect, inject, untracked } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, delay, filter } from 'rxjs';

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
    params: this.id,
    // Define an async loader that retrieves data.
    // The resource calls this function every time the `request` value changes.
    stream: ({ params, previous }) => {
      console.log(previous.status)
      return this.httpClient.get<unknown>(`https://swapi.dev/api/people/${params ?? 1}/`).pipe(delay(1000));
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
