import * as shortId from 'shortid';

import { addDays, endOfMonth, startOfDay } from 'date-fns';

import { ICompany } from './../shared/interfaces/company.interface';
import { IPackage } from './../shared/interfaces/package.interface';

export class CompanyFakeDb {
    public static companies: ICompany[] = [
        {
            id: 'nick-scali',
            name: 'NickScali Furniture',
        },
        {
            'id': 'advanced-furniture',
            'name': 'Advanced Furniture',
        },
        {
            'id': 'bed-dream',
            'name': 'Bed & Dream',
        },
    ];

    public static packages: IPackage[] = [
        {
            id: shortId.generate(),
            companyId: 'nick-scali',
            name: 'Samarang to Melbourne',
            containers: [shortId.generate().toUpperCase(), shortId.generate().toUpperCase()],
            customerRef: [shortId.generate().toUpperCase(), shortId.generate().toUpperCase()],
            supplier: 'MEILLER AUFZUGTUREN GMBH',
            mode: 'Air',
            status: 'Completed',
            orderDate: startOfDay(new Date()),
            originPort: 'Registered',
            arrivalDate: endOfMonth(new Date()),
            destinationPort: 'Melbourne',
            routes: [
                {
                    packageId: '',
                    departureDate: addDays(new Date(), 2),
                    arrivalDate: addDays(new Date(), 2),
                    id: shortId.generate(),
                    originPort: 'Registered',
                    transitPort: 'Samarang',
                    mode: 'Air',
                },
                {
                    packageId: '',
                    departureDate: endOfMonth(new Date()),
                    arrivalDate: endOfMonth(new Date()),
                    id: shortId.generate(),
                    originPort: 'Samarang',
                    transitPort: 'Melbourne',
                    mode: 'Air',
                },
            ]
        },
        {
            id: shortId.generate(),
            companyId: 'nick-scali',
            name: 'Ningbo to Melbourne',
            containers: [shortId.generate().toUpperCase(), shortId.generate().toUpperCase()],
            customerRef: [shortId.generate().toUpperCase(), shortId.generate().toUpperCase(), shortId.generate().toUpperCase()],
            supplier: 'LEADER LEISURE INTERNATIONAL CO., LTD',
            mode: 'Sea',
            status: 'At Origin (Job Added)',
            orderDate: startOfDay(new Date()),
            originPort: 'Registered',
            arrivalDate: endOfMonth(new Date()),
            destinationPort: 'Melbourne',
            routes: [
                {
                    packageId: shortId.generate(),
                    departureDate: addDays(new Date(), 2),
                    arrivalDate: addDays(new Date(), 4),
                    id: shortId.generate(),
                    originPort: 'Registered',
                    transitPort: 'NingBo',
                    mode: 'Sea',
                },
                {
                    packageId: shortId.generate(),
                    departureDate: addDays(new Date(), 4),
                    arrivalDate: addDays(new Date(), 8),
                    id: shortId.generate(),
                    originPort: 'NingBo',
                    transitPort: 'Singapore',
                    mode: 'Sea',
                },
                {
                    packageId: shortId.generate(),
                    departureDate: endOfMonth(new Date()),
                    arrivalDate: endOfMonth(new Date()),
                    id: shortId.generate(),
                    originPort: 'Singapore',
                    transitPort: 'Melbourne',
                    mode: 'Sea',
                },
            ]
        },
        {
            id: shortId.generate(),
            companyId: 'nick-scali',
            name: 'Singapore to Sydney',
            containers: [shortId.generate().toUpperCase()],
            customerRef: [shortId.generate().toUpperCase()],
            supplier: 'SHENZHEN D AND S KINGDOM FURNI',
            mode: 'Transport',
            status: 'At Origin (Job Added)',
            orderDate: startOfDay(new Date()),
            originPort: 'Registered',
            arrivalDate: addDays(new Date(), 1),
            destinationPort: 'Melbourne',
            routes: [
                {
                    packageId: shortId.generate(),
                    departureDate: startOfDay(new Date()),
                    arrivalDate: addDays(new Date(), 1),
                    id: shortId.generate(),
                    originPort: 'Registered',
                    transitPort: 'Samarang',
                    mode: 'Transport',
                },
                {
                    packageId: shortId.generate(),
                    departureDate: addDays(new Date(), 1),
                    arrivalDate: addDays(new Date(), 5),
                    id: shortId.generate(),
                    originPort: 'Samarang',
                    transitPort: 'Melbourne',
                    mode: 'Transport',
                },
            ]
        },
    ];
}