import { IPackage } from './../interfaces/package.interface';
import { IRoute } from '../interfaces/route.interface';
import { ModeModel } from './mode.model';
import { ModeTypes } from '../types/mode.type';
import { PortTypes } from '../types/port.type';
import { RouteModel } from './route.model';
import { StatusTypes } from '../types/status.type';
import { StringBaseModel } from './base.model';

export class PackageModel extends StringBaseModel implements IPackage {
    companyId: string;
    name: string;
    mode: ModeTypes;
    departureDate: Date;
    arrivalDate: Date;
    status: StatusTypes;
    routes: IRoute[];
    originPort?: PortTypes;
    transitPort: PortTypes;
    destinationPort: PortTypes;
    customerRef: string[];
    containers: string[];
    supplier: string;

    constructor(id: string = null, data?: IPackage) {
        super(id);
        if (!data) return;
        this.companyId = data.companyId || '';
        this.name = data.name || '';
        this.mode = data.mode || 'Air';
        this.departureDate = new Date(data.departureDate);
        this.arrivalDate = new Date(data.arrivalDate);
        this.status = data.status || 'At Origin (Job Added)';
        this.routes = data.routes || [];
        this.originPort = data.originPort || 'Registered';
        this.destinationPort = data.destinationPort || 'Registered';
        this.customerRef = data.customerRef || [];
        this.containers = data.containers || [];
        this.supplier = data.supplier || ''
    }

    get originIcon(): string {
        return '/assets/icons/jobs/u133.png';
    }

    get Mode(): ModeModel {
        return new ModeModel(this.mode);
    }

    get Routes(): RouteModel[] {
        return this.routes.map(r => new RouteModel(r.id, this.id, r));
    }

    get departureDateLocale(): string {
        return this.departureDate?.toLocaleDateString('en-AU');
    }

    get arrivalDateLocale(): string {
        return this.arrivalDate?.toLocaleDateString('en-AU');
    }

    get completedIcon(): string {
        return this.status === 'Completed' ? '/assets/icons/jobs/u143.png' : '/assets/icons/jobs/u145.png';
    }
}