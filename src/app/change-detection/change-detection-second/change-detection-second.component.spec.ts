import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionSecondComponent } from './change-detection-second.component';

describe('ChangeDetectionSecondComponent', () => {
  let component: ChangeDetectionSecondComponent;
  let fixture: ComponentFixture<ChangeDetectionSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ChangeDetectionSecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeDetectionSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
