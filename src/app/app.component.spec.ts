import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FakeStorageComponent } from './fake-storage/fake-storage.component';
import { AnimationsComponent } from './animations/animations.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { ComponentSelectorComponent } from './component-selector/component-selector.component';
import { ConstructorNotCalledComponent } from './constructor-not-called/constructor-not-called.component';
import { DirePipesComponent } from './dire-pipes/dire-pipes.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { ForOfComponent } from './for-of/for-of.component';
import { FormsComponent } from './forms/forms.component';
import { InjectionTokensComponent } from './injection-tokens/injection-tokens.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { LifecycleHooksProjectedComponent } from './lifecycle-hooks/lifecycle-hooks-projected/lifecycle-hooks-projected.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { LinkedSignalComponent } from './linked-signal/linked-signal.component';
import { ParentInjectionComponent } from './parent-injection/parent-injection.component';
import { ResourceApiComponent } from './resource-api/resource-api.component';
import { RoutingComponent } from './routing/routing.component';
import { SecurityComponent } from './security/security.component';
import { StyleEncapComponent } from './style-encap/style-encap.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { TemplatesContainerComponent } from './templates-container/templates-container.component';
import { ViewProvidersComponent } from './view-providers/view-providers.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FakeStorageComponent,
        TemplatesContainerComponent,
        InjectionTokensComponent,
        ChangeDetectionComponent,
        RoutingComponent,
        SubjectsComponent,
        DirePipesComponent,
        ForOfComponent,
        StyleEncapComponent,
        InputOutputComponent,
        ViewProvidersComponent,
        FormsComponent,
        AnimationsComponent,
        SecurityComponent,
        LifecycleHooksComponent,
        LifecycleHooksProjectedComponent,
        DynamicComponentComponent,
        ComponentSelectorComponent,
        LinkedSignalComponent,
        ParentInjectionComponent,
        ConstructorNotCalledComponent,
        ResourceApiComponent,
        FakeStorageComponent,
      ],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
