import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id: 'home',
        title: 'Dashboard',
        translate: 'NAV.DASHBOARD',
        type: 'item',
        url: '/',
        exactMatch: true
    },
    {
        id: 'my_jobs',
        title: 'My Jobs',
        translate: 'NAV.MY_JOBS',
        type: 'item',
        url: '/my-jobs',
        exactMatch: true
    },
];
