import { ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';
import { MockService, TestsComponent } from './tests.component';

class TestMockService {
  getSth() {
    console.log('duuupa');
    return of(100);
  }
}

describe('TestsComponent', () => {
  let component: TestsComponent;
  let fixture: ComponentFixture<TestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestsComponent],
    })
      .overrideComponent(TestsComponent, {
        // remove: { providers: [{ provide: TOKEN, useValue: 2312312312 }] },
        add: {
          providers: [
            {
              provide: MockService,
              useClass: TestMockService,
            },
          ],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(TestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 23', () => {
    expect(component.someProp).toBe(23);
  });

  it('should have 100', (tick) => {
    tick();
    expect(component.asyncProp).toBe(100);
  });
});
