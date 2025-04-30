import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeStorageComponent } from './fake-storage.component';

describe('FakeStorageComponent', () => {
  let component: FakeStorageComponent;
  let fixture: ComponentFixture<FakeStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FakeStorageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FakeStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
