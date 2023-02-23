import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForThirdComponent } from './for-third.component';

describe('ForThirdComponent', () => {
  let component: ForThirdComponent;
  let fixture: ComponentFixture<ForThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ForThirdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
