import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingChildFirstComponent } from './routing-child-first.component';

describe('RoutingChildFirstComponent', () => {
  let component: RoutingChildFirstComponent;
  let fixture: ComponentFixture<RoutingChildFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RoutingChildFirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingChildFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
