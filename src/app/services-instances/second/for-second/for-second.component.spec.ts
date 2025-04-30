import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForSecondComponent } from './for-second.component';

describe('ForSecondComponent', () => {
  let component: ForSecondComponent;
  let fixture: ComponentFixture<ForSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
