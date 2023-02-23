import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleNestedComponent } from './style-nested.component';

describe('StyleNestedComponent', () => {
  let component: StyleNestedComponent;
  let fixture: ComponentFixture<StyleNestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ StyleNestedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyleNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
