import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingChildSecondComponent } from './routing-child-second.component';

describe('RoutingChildSecondComponent', () => {
  let component: RoutingChildSecondComponent;
  let fixture: ComponentFixture<RoutingChildSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RoutingChildSecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingChildSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
