import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeeperComponent } from './deeper.component';

describe('DeeperComponent', () => {
  let component: DeeperComponent;
  let fixture: ComponentFixture<DeeperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DeeperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeeperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
