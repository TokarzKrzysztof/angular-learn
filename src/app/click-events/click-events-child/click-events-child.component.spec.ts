import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickEventsChildComponent } from './click-events-child.component';

describe('ClickEventsChildComponent', () => {
  let component: ClickEventsChildComponent;
  let fixture: ComponentFixture<ClickEventsChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClickEventsChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClickEventsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
