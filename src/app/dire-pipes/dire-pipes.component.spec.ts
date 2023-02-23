import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirePipesComponent } from './dire-pipes.component';

describe('DirePipesComponent', () => {
  let component: DirePipesComponent;
  let fixture: ComponentFixture<DirePipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DirePipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirePipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
