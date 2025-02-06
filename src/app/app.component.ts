import { Component } from '@angular/core';
import { IAppComponent } from './IAppComponent';


// //take the first observable to emit
// const example = race(
//   //emit every 1.5s
//   interval(1500),
//   //emit every 1s
//   interval(1000).pipe(mapTo('1s won!')),
//   //emit every 2s
//   interval(2000),
//   //emit every 2.5s
//   interval(2500)
// );
// //output: "1s won!"..."1s won!"...etc
// const subscribe = example.subscribe(val => console.log(val));

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
  providers: [{ provide: IAppComponent, useExisting: AppComponent }],
})
export class AppComponent implements IAppComponent {
  something = Math.random();
  array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,3,213,231,12,43,53,6,457,68,798,98,978675,45,343,23,13,123,43,5,65,756,567,867,1]

  ngOnInit() {
    console.log(this.something)
  }

  // title = 'angular-learn';
  // aaa: number = 0;
  // test = '';
  // constructor(
  //   private viewContainerRef: ViewContainerRef,
  //   private someService: SomeService
  // ) {
  //   this.test = 'asdads'
  // }

  // someMethod() {
  //   console.log(123333)
  // }
  // loadLazy() {
  // console.log(this.someService.random);
  // const inj = Injector.create({
  //   providers: [],
  // });
  // const ref = this.viewContainerRef.createComponent(LazyComponent, {
  //   injector: inj,
  // });
  // const aa = ref.injector.get(SomeService);
  // // setTimeout(() => {
  // //   // ref.setInput('bbb', 2)
  // //   ref.instance.bbb = 12;
  // // }, 100);
  // console.log(aa);
  // }
}
