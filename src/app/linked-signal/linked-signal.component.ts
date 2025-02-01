import { Component, linkedSignal, signal } from '@angular/core';
import { ConvertPipe } from "../pipes/convert.pipe";

@Component({
  selector: 'app-linked-signal',
  imports: [ConvertPipe],
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.scss',
})
export class LinkedSignalComponent {
  protected counter = signal(0);
  protected secondCounter = signal(0);

  // protected doubled = linkedSignal(() => {
  //   return this.counter() * 2;
  // });
  protected linkedCounter = linkedSignal({
    source: () => [this.counter(), this.secondCounter()],
    computation: ([counter1, counter2], prev) => {
      // console.log({source: prev?.source})
      // console.log({value: prev?.value})
      return counter1 + counter2
    }
  });

  increment() {
    this.counter.update((prev) => prev + 1);
  }
  secondIncrement() {
    this.secondCounter.update((prev) => prev + 1);
  }

  getRandomized() {
    return Math.random();
  }
}
