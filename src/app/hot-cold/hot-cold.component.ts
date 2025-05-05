import { Component, OnInit } from '@angular/core';
import { MonoTypeOperatorFunction, Observable, of, OperatorFunction, Subscriber } from 'rxjs';

@Component({
  selector: 'app-hot-cold',
  imports: [],
  templateUrl: './hot-cold.component.html',
  styleUrl: './hot-cold.component.scss',
})
export class HotColdComponent implements OnInit {
  ngOnInit(): void {
    console.log('init');
    appOf(123, 's').subscribe(console.log);

    of(10)
      .pipe(appMap((value) => value * 2))
      .subscribe((result) => console.log(result));

    const hot = of('test').pipe(HOTAssignSameRandomNumber());
    hot.subscribe(console.log);
    hot.subscribe(console.log);
    hot.subscribe(console.log);
    hot.subscribe(console.log);
    hot.subscribe(console.log);
  }
}

const appOf = <T extends unknown[]>(...values: T): Observable<T[number]> => {
  return new Observable((subscriber) => {
    values.forEach((x) => {
      subscriber.next(x);
    });
    subscriber.complete();
  });
};

const appMap = <T, R>(project: (value: T) => R): OperatorFunction<T, R> => {
  return (source: Observable<T>) => {
    return new Observable<R>((subscriber) => {
      return operate(source, subscriber, (value) => project(value));
    });
  };
};

const HOTAssignSameRandomNumber = (): MonoTypeOperatorFunction<string> => {
  const hotNumber = Math.random().toFixed(2);

  return (source: Observable<string>) => {
    return new Observable((subscriber) => {
      return operate(source, subscriber, (value) => `${value} - ${hotNumber}`);
    });
  };
};

const operate = <T, R>(source: Observable<T>, subscriber: Subscriber<R>, project: (value: T) => R) => {
  const subscription = source.subscribe({
    next: (value) => subscriber.next(project(value)),
    error(error) {
      console.log(error);
      subscriber.error(error);
    },
    complete() {
      subscriber.complete();
    },
  });

  return () => subscription.unsubscribe();
};
