import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructorNotCalledComponent } from './constructor-not-called.component';

describe('ConstructorNotCalledComponent', () => {
  let component: ConstructorNotCalledComponent;
  let fixture: ComponentFixture<ConstructorNotCalledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConstructorNotCalledComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstructorNotCalledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
