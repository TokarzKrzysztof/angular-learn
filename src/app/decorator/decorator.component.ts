import { Component, Input, NgZone, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CallOnChange,
  OutsideZone,
  Required,
  RunInInterval,
  TrackChanges,
  Uppercase,
} from './decorators';
import { Min } from './format-decorator';
import { CacheService } from './cache.service';

@Component({
  selector: 'app-decorator',
  standalone: true,
  imports: [CommonModule],
  template: ` {{ aaa }}`,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class DecoratorComponent {
  @Input() @Uppercase() aaa: string = 'bbbas';
  @Input() @CallOnChange<DecoratorComponent>('onTestChange') test = '';
  // @Input() @Required a: number;
  // @Input() @Uppercase() test: string;

  constructor(private cacheService: CacheService) {
    // setInterval(() => {
      this.cacheService.loadData(232, '').subscribe((a) => {
        console.log(a)
      });
    // }, 1000);
    // console.log(this)
    // console.log(this.aaa)
    // this.runOutside();
    // console.log("ctor")
    // setTimeout(() => {
    //   console.log(this.aaa)
    // }, 1000);
  }

  // @configurable(false)
  get aaaas() {
    return 'as';
  }

  @RunInInterval(2000) someMethod(param: string, param2: number = 109) {
    console.log(this);
    console.log(param);
    console.log(param2);
    this.someDeep();
  }

  someDeep() {
    console.log(';from deep!');
  }
  onTestChange(prevValue: string, currentValue: string) {
    console.log(prevValue);
    console.log(currentValue);
    console.log(this);
  }

  ngOnInit() {
    // console.log(this.aaa)
    // this.someMethod('asd')
    // setInterval(() => {
    //   this.test += "a"
    // }, 1000)
  }
  // method() {
  //   console.log(123);
  // }
  // @OutsideZone runOutside() {
  //   setInterval(() => {}, 1000);
  // }
  // @TrackChanges<DecoratorComponent>('aaa', 'parseVal1')
  // ngOnChanges(changes: SimpleChanges): void {}

  // parseVal1(val: number): void {
  //   console.log(val)
  //   // this.data.item1 = Math.random() * val;
  // }

  // parseVal2(val: number): void {
  //   console.log(val)
  //   // this.data.item2 = Math.random() * val;
  // }
  // @Confirmable() deleteItem(): void {
  //   console.log("delete")
  //   //Code to delete your item
  // }
}
