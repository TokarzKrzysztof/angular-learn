import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleEncapComponent } from './style-encap.component';

describe('StyleEncapComponent', () => {
  let component: StyleEncapComponent;
  let fixture: ComponentFixture<StyleEncapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ StyleEncapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyleEncapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
