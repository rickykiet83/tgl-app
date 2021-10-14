import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthEffects } from './../store/effects/auth.effects';
import { AuthGuard } from './shared/services/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CompanyEffects } from './../store/effects/company.effects';
import { EffectsModule } from '@ngrx/effects';
import { FakeDbService } from './fake-db/fake-db.service';
import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { LayoutModule } from './layout/layout.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { NgModule } from '@angular/core';
import { PackageEffects } from './../store/effects/package.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { TranslateModule } from '@ngx-translate/core';
import { appReducers } from './../store/reducers/app.reducers';
import { environment } from './../environments/environment';
import { fuseConfig } from './fuse-config';

const appRoutes: Routes = [
    {
        path: '',
        loadChildren: () => import('./main/home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'my-jobs',
        // canActivate: [AuthGuard],
        canLoad: [AuthGuard],
        loadChildren: () => import('./main/my-job/my-job.module').then(m => m.MyJobModule)
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),

        TranslateModule.forRoot(),
        InMemoryWebApiModule.forRoot(FakeDbService, {
            delay: 0,
            passThruUnknownUrl: true
        }),

        StoreModule.forRoot(appReducers),
        EffectsModule.forRoot([
            CompanyEffects,
            PackageEffects,
            AuthEffects,
        ]),
        StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
        !environment.production ? StoreDevtoolsModule.instrument() : [],

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
