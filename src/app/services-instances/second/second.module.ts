import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirdModule } from '../third/third.module';
import { ForSecondComponent } from './for-second/for-second.component';
import { ForSecond2Component } from './for-second2/for-second2.component';
import { SomeService } from '../some.service';

@NgModule({
  declarations: [ForSecondComponent, ForSecond2Component],
  imports: [CommonModule],
  exports: [ForSecondComponent, ForSecond2Component],
  providers: [SomeService]
})
export class SecondModule {}
