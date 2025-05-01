import {
  ChangeDetectorRef,
  Component,
  inject,
  InjectionToken,
  Injector,
  Optional,
  signal,
  SkipSelf,
  viewChild,
} from '@angular/core';
import { IAppComponent, SOME_TOKEN } from './IAppComponent';
import { SomeFake } from './fake-storage/fake-variables';
import { FakeStorageComponent } from './fake-storage/fake-storage.component';

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
  providers: [
    { provide: IAppComponent, useExisting: AppComponent },
    { provide: 'dupa', useValue: 'pppp2' },
    { provide: SOME_TOKEN, useFactory: (value: number) => inject(SOME_TOKEN, { skipSelf: true }) + 10 },
  ],
})
export class AppComponent implements IAppComponent {
  private fakeCom = viewChild(FakeStorageComponent);
  private fakeCom2 = inject(SOME_TOKEN);
  something = Math.random();
  array = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 3, 213, 231, 12, 43, 53, 6, 457, 68,
    798, 98, 978675, 45, 343, 23, 13, 123, 43, 5, 65, 756, 567, 867, 1,
  ];
  count = signal(0);

  constructor(private injector: Injector) {
    // console.log(this.fakeCom());
    // console.log(this.fakeCom2);
    // console.log(stroare);
  }

  ngOnInit() {
    setInterval(() => {
      this.count.update(val => val + 1)
      // SomeFake.Somee++;
      // console.log(this.injector.get('dupa'));
      // // console.log(this.injector.get(SOME_TOKEN));
      // this.fakeCom()?.detect();
    }, 1000);
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
