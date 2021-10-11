import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id: 'my_jobs',
        title: 'My Jobs',
        translate: 'NAV.MY_JOBS',
        type: 'item',
        url: '/home',
        exactMatch: true
    },
    {
        id: 'my_quotes',
        title: 'My Quotes',
        translate: 'NAV.MY_QUOTES',
        type: 'item',
        url: '/',
        exactMatch: true
    }
];
