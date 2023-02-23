import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-for-of',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './for-of.component.html',
  styleUrls: ['./for-of.component.scss']
})
export class ForOfComponent {
  items = ['test', 'test2', 'test3'] as const
  constructor() {
  }
}
