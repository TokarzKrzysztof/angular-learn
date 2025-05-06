import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSyntaxComponent } from './template-syntax.component';

describe('TemplateSyntaxComponent', () => {
  let component: TemplateSyntaxComponent;
  let fixture: ComponentFixture<TemplateSyntaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateSyntaxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateSyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
