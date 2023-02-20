import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesChildComponent } from './templates-child.component';

describe('TemplatesChildComponent', () => {
  let component: TemplatesChildComponent;
  let fixture: ComponentFixture<TemplatesChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TemplatesChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatesChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
