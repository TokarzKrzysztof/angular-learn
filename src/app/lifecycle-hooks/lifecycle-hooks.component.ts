import { CommonModule } from '@angular/common';
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { LifecycleHooksChildComponent } from './lifecycle-hooks-child/lifecycle-hooks-child.component';

@Component({
  selector: 'app-lifecycle-hooks',
  standalone: true,
  template: `
    <p>lifecycle-hooks works!</p>
    <app-lifecycle-hooks-child></app-lifecycle-hooks-child>
    <ng-content></ng-content>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  imports: [CommonModule, LifecycleHooksChildComponent],
})
export class LifecycleHooksComponent
  implements
    OnInit,
    DoCheck,
    OnDestroy,
    AfterContentInit,
    AfterViewInit,
    AfterContentChecked,
    AfterViewChecked,
    OnChanges
{
  @Input() sth: number;

  ngOnChanges(changes: SimpleChanges): void {
    // Called before ngOnInit() (if the component has bound inputs) and whenever one or more data-bound input properties change
    console.log('ngOnChanges');
  }
  ngOnInit(): void {
    // Called once, after the first ngOnChanges(). ngOnInit() is still called even when ngOnChanges() is not (which is the case when there are no template-bound inputs).
    console.log('ngOnInit');
  }
  ngDoCheck(): void {
    // Called immediately after ngOnChanges() on every change detection run, and immediately after ngOnInit() on the first run.
    console.log('ngDoCheck');
  }
  ngOnDestroy(): void {
    // Called immediately before Angular destroys the directive or component
    console.log('ngOnDestroy');
  }
  ngAfterContentInit(): void {
    // Called once after the first ngDoCheck().
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    // Called after ngAfterContentInit() and every subsequent ngDoCheck().
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    // Called once after the first ngAfterContentChecked().
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    // Called after the ngAfterViewInit() and every subsequent ngAfterContentChecked().
    console.log('ngAfterViewChecked');
  }
}
