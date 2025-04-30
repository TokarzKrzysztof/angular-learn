import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, provideHttpClientTesting } from '@angular/common/http/testing';

import { ResourceApiComponent } from './resource-api.component';
import { HttpClient, provideHttpClient } from '@angular/common/http';

describe('ResourceApiComponent', () => {
  let component: ResourceApiComponent;
  let fixture: ComponentFixture<ResourceApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourceApiComponent, HttpClientTestingModule],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(ResourceApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
