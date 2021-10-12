import { RouterModule, Routes } from '@angular/router';

import { CompanyListComponent } from './components/company-list/company-list.component';
import { FuseSharedModule } from '@fuse/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MyJobComponent } from './my-job.component';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FiltersComponent } from './components/filters/filters.component';
import { ModeFilterComponent } from './components/filters/mode-filter/mode-filter.component';
import { StatusFilterComponent } from './components/filters/status-filter/status-filter.component';
import { DepartureDateFilterComponent } from './components/filters/departure-date-filter/departure-date-filter.component';
import { ArrivalDateFilterComponent } from './components/filters/arrival-date-filter/arrival-date-filter.component';
import { PortFilterComponent } from './components/filters/port-filter/port-filter.component';
import { SortbyFilterComponent } from './components/filters/sortby-filter/sortby-filter.component';

const routes: Routes = [
    {
        path: '',
        component: MyJobComponent
    }
];

@NgModule({
    declarations: [MyJobComponent, CompanyListComponent, FiltersComponent, ModeFilterComponent, StatusFilterComponent, DepartureDateFilterComponent, ArrivalDateFilterComponent, PortFilterComponent, SortbyFilterComponent],
    imports: [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatRippleModule,
        MatTableModule,
        MatToolbarModule,
        MatSelectModule,

        TranslateModule,

        FuseSharedModule
    ]
})
export class MyJobModule { }
