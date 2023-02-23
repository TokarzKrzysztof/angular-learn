import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForThirdComponent } from './for-third/for-third.component';
import { SomeService } from '../some.service';

@NgModule({
  declarations: [ForThirdComponent],
  imports: [CommonModule],
  exports: [ForThirdComponent],
  providers: [SomeService]
})
export class ThirdModule {}
