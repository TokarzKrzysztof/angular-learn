import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ActivatedRoute,
  provideRouter,
  Router,
  RouterModule,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-routing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.scss'],
})
export class RoutingComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  navigateTo(to: string) {
    this.router.navigate([to], { relativeTo: this.activatedRoute})
  }
  navigateBack() {
    this.router.navigate(["../"], {relativeTo: this.activatedRoute})
  }
}
