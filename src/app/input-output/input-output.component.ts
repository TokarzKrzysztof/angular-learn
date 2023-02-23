import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeeperComponent } from "./deeper/deeper.component";
import { ButtonComponent } from "../button/button.component";

@Component({
    selector: 'app-input-output',
    standalone: true,
    templateUrl: './input-output.component.html',
    styleUrls: ['./input-output.component.scss'],
    imports: [CommonModule, DeeperComponent, ButtonComponent]
})
export class InputOutputComponent {
  callbackFn() {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log("before resolve")
        resolve();
      }, 2000);
    })
  }
}
