import * as shortId from 'shortid';

import { addDays, endOfMonth, startOfDay } from 'date-fns';

import { ICompany } from './../shared/interfaces/company.interface';

export class CompanyFakeDb {
    public static companies: ICompany[] = [
        {
            id: 'nick-scali',
            name: 'NickScali Furniture',
            packages: [
                {
                    id: shortId.generate(),
                    companyId: 'nick-scali',
                    name: 'Samarang to Melbourne',
                    containers: ['PCIU9344080', 'CSLU1877403'],
                    customerRef: ['868400', '25350'],
                    supplier: 'MEILLER AUFZUGTUREN GMBH',
                    mode: 'Air',
                    status: 'At Origin (Job Added)',
                    orderDate: startOfDay(new Date()),
                    originPort: 'Registered',
                    arrivalDate: endOfMonth(new Date()),
                    destinationPort: 'Melbourne',
                    route: [
                        {
                            packageId: '',
                            departureDate: addDays(new Date(), 2),
                            arrivalDate: addDays(new Date(), 2),
                            id: shortId.generate(),
                            originPort: 'Registered',
                            transitPort: 'Samarang',
                        },
                        {
                            packageId: '',
                            departureDate: endOfMonth(new Date()),
                            arrivalDate: endOfMonth(new Date()),
                            id: shortId.generate(),
                            originPort: 'Samarang',
                            transitPort: 'Melbourne',
                        },
                    ]
                },
                {
                    id: shortId.generate(),
                    companyId: 'nick-scali',
                    name: 'Ningbo to Melbourne',
                    containers: ['PCIU9344080', 'CSLU1877403'],
                    customerRef: ['868400', '25350'],
                    supplier: 'MEILLER AUFZUGTUREN GMBH',
                    mode: 'Air',
                    status: 'At Origin (Job Added)',
                    orderDate: startOfDay(new Date()),
                    originPort: 'Registered',
                    arrivalDate: endOfMonth(new Date()),
                    destinationPort: 'Melbourne',
                    route: [
                        {
                            packageId: '',
                            departureDate: addDays(new Date(), 2),
                            arrivalDate: addDays(new Date(), 4),
                            id: shortId.generate(),
                            originPort: 'Registered',
                            transitPort: 'NingBo',
                        },
                        {
                            packageId: '',
                            departureDate: addDays(new Date(), 4),
                            arrivalDate: addDays(new Date(), 8),
                            id: shortId.generate(),
                            originPort: 'NingBo',
                            transitPort: 'Singapore',
                        },
                        {
                            packageId: '',
                            departureDate: endOfMonth(new Date()),
                            arrivalDate: endOfMonth(new Date()),
                            id: shortId.generate(),
                            originPort: 'Singapore',
                            transitPort: 'Melbourne',
                        },
                    ]
                },

                {
                    id: shortId.generate(),
                    companyId: 'nick-scali',
                    name: 'Singapore to Sydney',
                    containers: ['PCIU9344080', 'CSLU1877403'],
                    customerRef: ['868400', '25350'],
                    supplier: 'MEILLER AUFZUGTUREN GMBH',
                    mode: 'Air',
                    status: 'At Origin (Job Added)',
                    orderDate: startOfDay(new Date()),
                    originPort: 'Registered',
                    arrivalDate: addDays(new Date(), 1),
                    destinationPort: 'Melbourne',
                    route: [
                        {
                            packageId: '',
                            departureDate: startOfDay(new Date()),
                            arrivalDate: addDays(new Date(), 1),
                            id: shortId.generate(),
                            originPort: 'Registered',
                            transitPort: 'Samarang',
                        },
                        {
                            packageId: '',
                            departureDate: addDays(new Date(), 1),
                            arrivalDate: addDays(new Date(), 1),
                            id: shortId.generate(),
                            originPort: 'Samarang',
                            transitPort: 'Melbourne',
                        },
                    ]
                },
            ],
        },
        {
            'id': 'advanced-furniture',
            'name': 'Advanced Furniture',
            packages: [],
        },
        {
            'id': 'bed-dream',
            'name': 'Bed & Dream',
            packages: [],
        },
    ];
}