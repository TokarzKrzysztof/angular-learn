import { Component } from '@angular/core';
import { SomeViewService } from './some-view.service';
import { ViewNestedComponent } from './view-nested/view-nested.component';
import { ViewNestedDeepComponent } from './view-nested-deep/view-nested-deep.component';

@Component({
  selector: 'app-view-providers',
  template: `
    <app-view-nested>
      <app-view-nested-deep></app-view-nested-deep>
      <app-view-nested-deep></app-view-nested-deep>
    </app-view-nested>
  `,
  providers: [
    {
      provide: SomeViewService,
      useFactory: () => {
        return new SomeViewService('test overriden');
      },
    },
  ],
  standalone: true,
  imports: [ViewNestedComponent, ViewNestedDeepComponent],
})
export class ViewProvidersComponent {}
