import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testPipe',
  standalone: true,
})
export class TestPipePipe implements PipeTransform {
  constructor() {
    console.log("pipe create")
  }
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
