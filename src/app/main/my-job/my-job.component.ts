import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { FormControl } from '@angular/forms';
import { fuseAnimations } from '@fuse/animations';

@Component({
    selector: 'app-my-job',
    templateUrl: './my-job.component.html',
    styleUrls: ['./my-job.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class MyJobComponent implements OnInit {

    searchInput: FormControl;
    jobItems: any[] = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
    ];

    constructor() {
        // Set the defaults
        this.searchInput = new FormControl('');
    }

    ngOnInit(): void {
    }

}
