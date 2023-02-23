import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleNestedComponent } from "./style-nested/style-nested.component";
import { RemoveWrapperDirective } from './remove-wrapper.directive';
import { ButtonComponent } from "../button/button.component";

@Component({
    selector: 'app-style-encap',
    standalone: true,
    templateUrl: './style-encap.component.html',
    styleUrls: ['./style-encap.component.scss'],
    hostDirectives: [RemoveWrapperDirective],
    imports: [CommonModule, StyleNestedComponent, ButtonComponent]
})
export class StyleEncapComponent {

}
