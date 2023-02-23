import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncSubject, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent {
  async$ = new AsyncSubject();
  replay$ = new ReplaySubject(1);
  
  constructor() {
    setTimeout(() => {
      this.async$.next("111");
      this.async$.complete();
      this.replay$.next("222");
    }, 1000);

    this.async$.subscribe((res) => {
      console.log(res);
    })

    setTimeout(() => {
      this.async$.subscribe((res) => {
        console.log(res);
      })
    }, 2000);
    setTimeout(() => {
      this.replay$.subscribe((res) => {
        console.log(res);
      })
    }, 2000);
    setTimeout(() => {
      this.replay$.subscribe((res) => {
        console.log(res);
      })
    }, 3000);
    setTimeout(() => {
      this.replay$.subscribe((res) => {
        console.log(res);
      })
    }, 4000);
  }

}
