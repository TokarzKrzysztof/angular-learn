import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionSecondDeepComponent } from './change-detection-second-deep.component';

describe('ChangeDetectionSecondDeepComponent', () => {
  let component: ChangeDetectionSecondDeepComponent;
  let fixture: ComponentFixture<ChangeDetectionSecondDeepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ChangeDetectionSecondDeepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeDetectionSecondDeepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
