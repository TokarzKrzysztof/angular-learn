import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionFirstDeepComponent } from './change-detection-first-deep.component';

describe('ChangeDetectionFirstDeepComponent', () => {
  let component: ChangeDetectionFirstDeepComponent;
  let fixture: ComponentFixture<ChangeDetectionFirstDeepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ChangeDetectionFirstDeepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeDetectionFirstDeepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
