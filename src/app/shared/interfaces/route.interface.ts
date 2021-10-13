import { IBaseModel } from './base.interface';
import { PortTypes } from '../types/port.type';

export interface IRoute extends IBaseModel<string> {
    packageId: string, //link to packageId
    departureDate: Date,
    arrivalDate: Date,
    originPort?: PortTypes,
    transitPort: PortTypes,
}