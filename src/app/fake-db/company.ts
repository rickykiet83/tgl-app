import { ICompany } from './../shared/interfaces/company.interface';

export class CompanyFakeDb {
    public static companies: ICompany[] = [
        {
            'id': null,
            'name': 'NickScali Furniture'
        },
        {
            'id': null,
            'name': 'Advanced Furniture'
        },
        {
            'id': null,
            'name': 'Bed & Dream'
        },
    ];
}