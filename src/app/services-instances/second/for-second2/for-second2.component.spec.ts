import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForSecond2Component } from './for-second2.component';

describe('ForSecond2Component', () => {
  let component: ForSecond2Component;
  let fixture: ComponentFixture<ForSecond2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForSecond2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
