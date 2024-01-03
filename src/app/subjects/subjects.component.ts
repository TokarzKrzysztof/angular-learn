import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncSubject, ReplaySubject } from 'rxjs';
import { SomeService } from '../services-instances/some.service';

@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss'],
  providers: [
    { provide: "test", useValue: "test" },
  ],
})
export class SubjectsComponent {
  async$ = new AsyncSubject();
  replay$ = new ReplaySubject(1);

  constructor(private s: SomeService) {
    console.log(s);
    setTimeout(() => {
      this.async$.next('111');
      this.async$.complete();
      this.replay$.next('222');
    }, 1000);

    this.async$.subscribe((res) => {
      console.log(res);
    });

    setTimeout(() => {
      this.async$.subscribe((res) => {
        console.log(res);
      });
    }, 2000);
    setTimeout(() => {
      this.replay$.subscribe((res) => {
        console.log(res);
      });
    }, 2000);
    setTimeout(() => {
      this.replay$.subscribe((res) => {
        console.log(res);
      });
    }, 3000);
    setTimeout(() => {
      this.replay$.subscribe((res) => {
        console.log(res);
      });
    }, 4000);
  }
}
