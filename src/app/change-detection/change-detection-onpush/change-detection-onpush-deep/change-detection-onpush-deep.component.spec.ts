import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionOnpushDeepComponent } from './change-detection-onpush-deep.component';

describe('ChangeDetectionOnpushDeepComponent', () => {
  let component: ChangeDetectionOnpushDeepComponent;
  let fixture: ComponentFixture<ChangeDetectionOnpushDeepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeDetectionOnpushDeepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeDetectionOnpushDeepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
