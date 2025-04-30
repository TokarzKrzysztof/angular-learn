import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoStandaloneComponent } from './no-standalone.component';

describe('NoStandaloneComponent', () => {
  let component: NoStandaloneComponent;
  let fixture: ComponentFixture<NoStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
