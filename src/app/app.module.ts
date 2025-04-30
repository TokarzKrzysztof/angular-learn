import { APP_ID, NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { DirePipesComponent } from './dire-pipes/dire-pipes.component';
import { ForOfComponent } from './for-of/for-of.component';
import { InjectionTokensComponent } from './injection-tokens/injection-tokens.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { NoStandaloneComponent } from './no-standalone/no-standalone.component';
import { RoutingComponent } from './routing/routing.component';
import { FirstModule } from './services-instances/first/first.module';
import { SecondModule } from './services-instances/second/second.module';
import { SomeService } from './services-instances/some.service';
import { ThirdModule } from './services-instances/third/third.module';
import { StyleEncapComponent } from './style-encap/style-encap.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { TemplatesContainerComponent } from './templates-container/templates-container.component';
import { ViewProvidersComponent } from './view-providers/view-providers.component';
// import { DecoratorComponent } from "./decorator/decorator.component";
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimationsComponent } from './animations/animations.component';
import { ComponentSelectorComponent } from './component-selector/component-selector.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { FormsComponent } from './forms/forms.component';
import { LifecycleHooksProjectedComponent } from './lifecycle-hooks/lifecycle-hooks-projected/lifecycle-hooks-projected.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { LinkedSignalComponent } from "./linked-signal/linked-signal.component";
import { SecurityComponent } from './security/security.component';
import { ParentInjectionComponent } from "./parent-injection/parent-injection.component";
import { ConstructorNotCalledComponent } from "./constructor-not-called/constructor-not-called.component";
import { ResourceApiComponent } from "./resource-api/resource-api.component";
import { FakeStorageComponent } from "./fake-storage/fake-storage.component";

@NgModule({
  declarations: [AppComponent, NoStandaloneComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    // AppRoutingModule,
    TemplatesContainerComponent,
    InjectionTokensComponent,
    ChangeDetectionComponent,
    RoutingComponent,
    FirstModule,
    SecondModule,
    ThirdModule,
    RouterModule.forRoot([
        {
            path: 'test',
            loadChildren: () => import('./routing/routing.routes').then((c) => c.ROUTING_ROUTES),
        },
        { path: '**', redirectTo: '/test', pathMatch: 'full' },
    ], {
        initialNavigation: 'enabledBlocking',
    }),
    SubjectsComponent,
    DirePipesComponent,
    StoreModule.forRoot({}, {}),
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
    FakeStorageComponent
],
  providers: [
    { provide: APP_ID, useValue: 'serverApp' },
    SomeService,
    provideHttpClient(withInterceptorsFromDi()),
  ],
})
export class AppModule {}
