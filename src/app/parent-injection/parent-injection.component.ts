import { Component, inject } from '@angular/core';
import { AppComponent } from '../app.component';
import { IAppComponent } from '../IAppComponent';

@Component({
  selector: 'app-parent-injection',
  imports: [],
  templateUrl: './parent-injection.component.html',
  styleUrl: './parent-injection.component.scss'
})
export class ParentInjectionComponent {
  /**
   *
   */
  constructor(private app: IAppComponent) {
    console.log(app.something)
    // console.log(inject(AppComponent).something)
    
    
  }
}
