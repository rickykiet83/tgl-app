import { RouterModule, Routes } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];

@NgModule({
    declarations: [HomeComponent],
    imports: [
        RouterModule.forChild(routes),

        TranslateModule,

        FuseSharedModule
    ],
    providers: []
})
export class HomeModule { }
