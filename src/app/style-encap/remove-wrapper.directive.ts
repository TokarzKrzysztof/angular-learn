import { Directive, ElementRef, Input, Renderer2, Self } from '@angular/core';
import { SomeService } from '../services-instances/some.service';

@Directive({
  selector: '[appRemoveWrapper]',
  standalone: true,
  // providers: [{provide:SomeService, useClass: SomeService}]
})
export class RemoveWrapperDirective {
  @Input() test: string;
  constructor(private elRef: ElementRef, private renderer: Renderer2, private s: SomeService) {
    s.from = 'directive';
    setTimeout(() => {
      console.log(s)
    }, 2000);
  }

  ngAfterViewInit(): void {

    // access the DOM. get the element to unwrap
    const el = this.elRef.nativeElement;
    const parent = this.renderer.parentNode(this.elRef.nativeElement);

    // move all children out of the element
    while (el.firstChild) { // this line doesn't work with server-rendering
      this.renderer.appendChild(parent, el.firstChild);
    }

    // remove the empty element from parent
    this.renderer.removeChild(parent, el);
  }
}

// components are directives with templates
@Directive({
  selector: 'app-something',
  standalone: true,
  providers: [{provide:SomeService, useClass: SomeService}]
})
export class SomethingDirective {
  @Input() test: string;
  constructor(private elRef: ElementRef, private renderer: Renderer2, @Self() private s: SomeService) {
    s.from = 'directive';
    setTimeout(() => {
      console.log(s)
    }, 2000);
  }

  ngAfterViewInit(): void {

    // access the DOM. get the element to unwrap
    const el = this.elRef.nativeElement;
    const parent = this.renderer.parentNode(this.elRef.nativeElement);

    // move all children out of the element
    while (el.firstChild) { // this line doesn't work with server-rendering
      this.renderer.appendChild(parent, el.firstChild);
    }

    // remove the empty element from parent
    this.renderer.removeChild(parent, el);
  }
}

