import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsComponent } from './subjects.component';
import { SomeService } from '../services-instances/some.service';

class SomeServiceMock extends SomeService {
  override from = '';
  override random = 10;
}

describe('SubjectsComponent', () => {
  let component: SubjectsComponent;
  let fixture: ComponentFixture<SubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SubjectsComponent ],
      providers: [
        {provide: SomeService, useClass: SomeServiceMock}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
