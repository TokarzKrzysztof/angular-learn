import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, inject, Input, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-bindings',
  imports: [ReactiveFormsModule],
  templateUrl: './bindings.component.html',
  styleUrl: './bindings.component.scss',
  host: {
    '(click)': 'handleCli($event)',
    '[class]': 'className()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BindingsComponent {
  emailControl = new FormControl('');
  // @Input({required: true}) someee: string
  lastName = input.required<string>()
  // rootId = 'assasaas';
  age = input(0);

   className = toSignal(this.emailControl.valueChanges)

  /**
   *
   */
  constructor() {
  }

  handleCli(e: any) {
    console.log(e);
  }
}
