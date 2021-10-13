import { Component, Input, OnInit } from '@angular/core';

import { IPackages } from './../../../../shared/interfaces/package.interface';

@Component({
    selector: 'app-job-item',
    templateUrl: './job-item.component.html',
    styleUrls: ['./job-item.component.scss']
})
export class JobItemComponent implements OnInit {
    @Input() item: IPackages;
    constructor() { }

    ngOnInit(): void {

    }

}
