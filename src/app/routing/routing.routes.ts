import { Route } from '@angular/router';
import { RoutingComponent } from './routing.component';

export const ROUTING_ROUTES: Route[] = [
  {
    path: '',
    component: RoutingComponent,
    children: [
      {
        path: 'first',
        loadComponent: () =>
          import('./routing-child-first/routing-child-first.component').then(
            (c) => c.RoutingChildFirstComponent
          ),
      },
      {
        path: 'second',
        loadComponent: () =>
          import('./routing-child-second/routing-child-second.component').then(
            (c) => c.RoutingChildSecondComponent
          ),
      },
    ],
    // children: [
    //   {
    //     path: 'first',
    //    component: RoutingChildFirstComponent
    //   },
    //   {
    //     path: 'second',
    //     loadComponent: () =>
    //       import('./routing-child-second/routing-child-second.component').then(
    //         (c) => c.RoutingChildSecondComponent
    //       ),
    //   },
    // ],
  },
];
