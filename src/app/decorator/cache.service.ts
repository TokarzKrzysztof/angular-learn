import { Injectable } from '@angular/core';
import { from, Observable, of, tap } from 'rxjs';
import { Cached, WithErrorHandling } from './decorators';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CacheService {
  constructor(private http: HttpClient) {
    console.log(http);
  }

  @WithErrorHandling() loadData(asd: number, asda: string) {
    console.log(this);
    console.log(asd);
    return this.httpCall();
  }

  private httpCall(): Observable<any> {
    console.log(this);
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1').pipe(
      tap(() => {
        throw new Error('babababa!');
      })
    );
    return from(
      fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => response.json())
        .then(() => {
          throw new Error('babababa!');
        })
    );
  }
}
