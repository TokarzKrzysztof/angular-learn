import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks-projected',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      lifecycle-hooks-projected works!
    </p>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class LifecycleHooksProjectedComponent {
  @Input() sth: number;

  ngOnChanges(changes: SimpleChanges): void {
    // Called before ngOnInit() (if the component has bound inputs) and whenever one or more data-bound input properties change
    console.log('ngOnChanges projected');
  }
  ngOnInit(): void {
    // Called once, after the first ngOnChanges(). ngOnInit() is still called even when ngOnChanges() is not (which is the case when there are no template-bound inputs).
    console.log('ngOnInit projected');
  }
  ngDoCheck(): void {
    // Called immediately after ngOnChanges() on every change detection run, and immediately after ngOnInit() on the first run.
    console.log('ngDoCheck projected');
  }
  ngOnDestroy(): void {
    // Called immediately before Angular destroys the directive or component
    console.log('ngOnDestroy projected');
  }
  ngAfterContentInit(): void {
    // Called once after the first ngDoCheck().
    console.log('ngAfterContentInit projected');
  }
  ngAfterContentChecked(): void {
    // Called after ngAfterContentInit() and every subsequent ngDoCheck().
    console.log('ngAfterContentChecked projected');
  }
  ngAfterViewInit(): void {
    // Called once after the first ngAfterContentChecked().
    console.log('ngAfterViewInit projected');
  }
  ngAfterViewChecked(): void {
    // Called after the ngAfterViewInit() and every subsequent ngAfterContentChecked().
    console.log('ngAfterViewChecked projected');
  }
}
