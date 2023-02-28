import { Component, Injector, ViewContainerRef } from '@angular/core';
import { LazyComponent } from './services-instances/lazy/lazy/lazy.component';
import { SomeService } from './services-instances/some.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SomeService]
})
export class AppComponent {
  title = 'angular-learn';
  aaa: number = 0;
  test = '';
  constructor(
    private viewContainerRef: ViewContainerRef,
    private someService: SomeService
  ) {
    this.test = 'asdads'
  }

  loadLazy() {
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
  }
}
