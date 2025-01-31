import { CommonModule } from '@angular/common';
import {
  Component,
  InjectionToken,
  Injector,
  inject,
  runInInjectionContext,
} from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
const TOKEN = new InjectionToken<string>('token', { factory: () => '123' });
const ANOTHERTOKEN = new InjectionToken<string>('token2', { factory: () => '123' });
@Component({
  selector: 'app-routing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.scss'],
  providers: [
    // { provide: TOKEN, useValue: '' },
    {
      provide: ANOTHERTOKEN,
      useFactory: (val: string) => val + '32333',
      deps: [TOKEN],
    },
  ],
})
export class RoutingComponent {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private injector: Injector
  ) {
    router.events.subscribe((e) => {
      // router.navigate(['asdasds']);
      console.log(e);
    });
  }

  ngOnInit() {
    runInInjectionContext(this.injector, () => {
      console.log(inject(ANOTHERTOKEN));
    });
  }

  navigateTo(to: string) {
    this.router.navigate([to], { relativeTo: this.activatedRoute });
  }
  navigateBack() {
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }
}
