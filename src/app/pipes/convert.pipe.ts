import { Pipe, PipeTransform } from '@angular/core';

interface Test1 {
  test1: string
}
interface Test2 {
  test2: number
}

function determineType<TType, TSecond>(obj: TType | TSecond, propToCheck: keyof TType): obj is TType {
  return (<TType>obj)[propToCheck] !== undefined;
}

@Pipe({
  name: 'convert',
  standalone: true,
})
export class ConvertPipe implements PipeTransform {

  transform(value: string): string {
    console.log("run")
    this.aaa({test1: ''})
    return value.toUpperCase();
  }

  aaa(par: Test1 | Test2) {
    if (determineType<Test1, Test2>(par, 'test1')) {
      par.test1
    } else {
      par.test2
    }
  }
}
