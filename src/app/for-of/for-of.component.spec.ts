import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForOfComponent } from './for-of.component';

describe('ForOfComponent', () => {
  let component: ForOfComponent;
  let fixture: ComponentFixture<ForOfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ForOfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForOfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
