import { IPackage } from './../interfaces/package.interface';
import { IRoute } from '../interfaces/route.interface';
import { ModeModel } from './mode.model';
import { ModeTypes } from '../types/mode.type';
import { PortTypes } from '../types/port.type';
import { StatusTypes } from '../types/status.type';
import { StringBaseModel } from './base.model';

export class PackageModel extends StringBaseModel implements IPackage {
    companyId: string;
    name: string;
    mode: ModeTypes;
    orderDate: Date;
    arrivalDate: Date;
    status: StatusTypes;
    route: IRoute[];
    originPort?: PortTypes;
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
        this.orderDate = new Date(data.orderDate);
        this.arrivalDate = new Date(data.arrivalDate);
        this.status = data.status || 'At Origin (Job Added)';
        this.route = data.route || [];
        this.originPort = data.originPort || 'Registered';
        this.destinationPort = data.destinationPort || 'Registered';
        this.customerRef = data.customerRef || [];
        this.containers = data.containers || [];
        this.supplier = data.supplier || ''
    }

    get Mode(): ModeModel {
        return new ModeModel(this.mode);
    }
}