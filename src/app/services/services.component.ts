import { Component, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SomeService {
  property = Math.random();
}

@Component({
  selector: 'app-first',
  template: '',
  // providers: [SomeService],
  standalone: true,
})
export class FirstComponent {
  constructor(private someService: SomeService) {
    console.log(someService.property);
  }
}

@Component({
  selector: 'app-second',
  template: '',
  // providers: [SomeService],
  standalone: true,
})
export class SecondComponent {
  constructor(private someService: SomeService) {
    let first, second, third;
    this.someService.getFirst(id).subscribe((res) => {
      first = res
      this.someService.getSecond(first.id).subscribe((res) => {
        second = res;
        this.someService.getThird(second.id).subscribe((res) => {
          third = res;

          this.someService.getFinal(first, second, third).subscribe((finalRes) => {
            this.final = finalRes
          })
        })
      })
    });
  }
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [FirstComponent, SecondComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
  providers: [SomeService],
})
export class ServicesComponent {}
