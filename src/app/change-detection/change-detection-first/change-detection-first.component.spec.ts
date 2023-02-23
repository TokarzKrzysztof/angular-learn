import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionFirstComponent } from './change-detection-first.component';

describe('ChangeDetectionFirstComponent', () => {
  let component: ChangeDetectionFirstComponent;
  let fixture: ComponentFixture<ChangeDetectionFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ChangeDetectionFirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeDetectionFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
