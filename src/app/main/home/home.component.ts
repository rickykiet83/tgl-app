import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { IAppState } from 'store/state';
import { LoginWithToken } from './../../../store/actions/auth.actions';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/internal/operators';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private store: Store<IAppState>,
    ) { }

    ngOnInit(): void {
        this.route.fragment
            .pipe(
                map(fragment => new URLSearchParams(fragment)),
                map(params => ({
                    access_token: params.get('access_token'),
                    id_token: params.get('id_token'),
                    error: params.get('error'),
                    error_description: params.get('error_description'),
                }))
            )
            .subscribe(res => {
                if (res.id_token) {
                    this.store.dispatch(new LoginWithToken(res.id_token));
                }
            });
    }

}
