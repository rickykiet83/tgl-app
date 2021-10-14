import { Component, Input, OnInit } from '@angular/core';

import { PackageModel } from './../../../../shared/models/package.model';

@Component({
    selector: 'app-job-item',
    templateUrl: './job-item.component.html',
    styleUrls: ['./job-item.component.scss']
})
export class JobItemComponent implements OnInit {
    @Input() item: PackageModel;
    constructor() { }

    ngOnInit(): void { }

}
