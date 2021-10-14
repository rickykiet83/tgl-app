import { IRoute } from '../interfaces/route.interface';
import { ModeModel } from './mode.model';
import { ModeTypes } from '../types/mode.type';
import { PortTypes } from '../types/port.type';
import { StatusTypes } from '../types/status.type';
import { StringBaseModel } from './base.model';
export class RouteModel extends StringBaseModel implements IRoute {
    packageId: string;
    mode: ModeTypes;
    departureDate: Date;
    status: StatusTypes;
    arrivalDate: Date;
    originPort?: PortTypes;
    transitPort: PortTypes;

    constructor(id: string = null, packageId: string, data?: IRoute) {
        super(id);
        this.packageId = packageId || null;
        this.mode = data.mode || 'Air';
        this.status = data.status || 'At Origin (Job Added)';
        this.departureDate = new Date(data.departureDate);
        this.arrivalDate = new Date(data.arrivalDate);
        this.originPort = data.originPort || 'Registered';
        this.transitPort = data.transitPort || 'Registered';
    }

    get icon(): string {
        return new ModeModel(this.mode).icon;
    }

    get arrivalDateLocale(): string {
        return this.arrivalDate?.toLocaleDateString('en-AU');
    }
}