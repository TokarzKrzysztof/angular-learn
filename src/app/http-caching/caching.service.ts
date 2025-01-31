import { HttpClient } from '@angular/common/http';
import { ApplicationRef, Injectable } from '@angular/core';
import { BehaviorSubject, shareReplay, switchMap } from 'rxjs';

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

@Injectable({
  providedIn: 'root',
})
export class CachingService {
  private reload$ = new BehaviorSubject(1);
  public todos$ = this.reload$.pipe(
    switchMap((id) =>
      this.http.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    ),
    shareReplay()
  );

  constructor(private http: HttpClient, private appRef: ApplicationRef) {}

  reload() {
    // this.reload$.next(getRandomInt(1,5))
    this.todos$ = this.http
      .get('https://jsonplaceholder.typicode.com/todos/' + getRandomInt(1, 5))
      .pipe(shareReplay());
  }
}
