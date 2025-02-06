import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentInjectionComponent } from './parent-injection.component';

describe('ParentInjectionComponent', () => {
  let component: ParentInjectionComponent;
  let fixture: ComponentFixture<ParentInjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentInjectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
