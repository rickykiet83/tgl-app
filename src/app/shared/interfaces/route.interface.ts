import { IBaseModel } from './base.interface';
import { ModeTypes } from '../types/mode.type';
import { PortTypes } from '../types/port.type';

export interface IRoute extends IBaseModel<string> {
    packageId: string, //link to packageId
    mode: ModeTypes,
    departureDate: Date,
    arrivalDate: Date,
    originPort?: PortTypes,
    transitPort: PortTypes,
}