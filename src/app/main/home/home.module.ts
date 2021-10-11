import { CommonModule } from '@angular/common';
import { FuseSharedModule } from '@fuse/shared.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

const routes = [
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
