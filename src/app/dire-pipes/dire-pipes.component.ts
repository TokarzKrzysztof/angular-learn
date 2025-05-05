import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { TestDireDirective } from './test-dire.directive';
import { TestPipePipe } from './test-pipe.pipe';

type Join<Str extends string, Separator extends string = ' '> = Str extends `${infer First}${Separator}${infer Rest}` ? Join<`${First}${Rest}`, Separator> : Str;

export const ProductsPageActions = createActionGroup({
  source: 'Products Page',
  events: {
   // defining an event without payload using the `emptyProps` function
    'Opened': emptyProps(),

    // defining an event with payload using the `props` function
    'Pagination Changed': props<{ page: number; offset: number }>(),

    // defining an event with payload using the props factory
    'Query Changed': (query: string) => ({ query }),
  },
});

ProductsPageActions.paginationChanged
const xx = "Query Changed Abc Test" as const;
// type CamelCase<T extends string> = T extends `${infer R} ${infer Z}` ? `${Lowercase<R>}${Z}` : never;

const zz: Join<typeof xx> = "QueryChangedAbcTest"

@Component({
  selector: 'app-dire-pipes',
  standalone: true,
  imports: [CommonModule, TestPipePipe, TestDireDirective],
  templateUrl: './dire-pipes.component.html',
  styleUrls: ['./dire-pipes.component.scss']
})
export class DirePipesComponent {

}
