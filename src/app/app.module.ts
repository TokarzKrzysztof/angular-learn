import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplatesContainerComponent } from './templates-container/templates-container.component';
import { InjectionTokensComponent } from './injection-tokens/injection-tokens.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { RoutingComponent } from './routing/routing.component';
import { RouterModule } from '@angular/router';
import { FirstModule } from './services-instances/first/first.module';
import { SecondModule } from './services-instances/second/second.module';
import { ThirdModule } from './services-instances/third/third.module';
import { SomeService } from './services-instances/some.service';
import { NoStandaloneComponent } from './no-standalone/no-standalone.component';
import { SubjectsComponent } from "./subjects/subjects.component";
import { DirePipesComponent } from "./dire-pipes/dire-pipes.component";
import { StoreModule } from '@ngrx/store';
import { ForOfComponent } from "./for-of/for-of.component";
import { StyleEncapComponent } from "./style-encap/style-encap.component";
import { InputOutputComponent } from "./input-output/input-output.component";
import { ViewProvidersComponent } from "./view-providers/view-providers.component";
import { ViewProvidersModule } from './view-providers/view-providers/view-providers.module';
// import { DecoratorComponent } from "./decorator/decorator.component";
import { HttpClientModule } from '@angular/common/http';
import { FormsComponent } from "./forms/forms.component";
import { AnimationsComponent } from "./animations/animations.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [AppComponent, NoStandaloneComponent],
    providers: [SomeService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
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
    initialNavigation: 'enabledBlocking'
}),
        SubjectsComponent,
        DirePipesComponent,
        StoreModule.forRoot({}, {}),
        ForOfComponent,
        StyleEncapComponent,
        InputOutputComponent,
        ViewProvidersComponent,
        // DecoratorComponent,
        HttpClientModule,
        FormsComponent,
        AnimationsComponent
    ]
})
export class AppModule {}
