import { CompanyFakeDb } from './company';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class FakeDbService implements InMemoryDbService {
    createDb(): any {
        return {
            // Company
            'companies': CompanyFakeDb.companies,
            'packages': CompanyFakeDb.packages,
        }
    }
}
