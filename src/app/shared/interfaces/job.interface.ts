import { IBaseModel } from './base.interface';

export enum ModeEnum {
    Air = 1,
    Sea,
    Transport,
    Warehouse,
    Rail
};

export declare type ModeTypes =
    | 'Air'
    | 'Sea'
    | 'Transport'
    | 'Warehouse'
    | 'Rail'
    ;

export enum StatusEnum {
    AllActive,
    AtOrigin_JobAdded,
    Departed,
    FreightCheckInAtOrigin,
    AwaitingArrivalAtDestination,
    CustomsClearance,
    AtTransitPort,
    InTransitToArrival,
    DestinationStopOff,
    AtFinalDestination,
    InvoicesNotSettled,
    Completed
};

export declare type StatusTypes =
    | 'All Active'
    | 'At Origin (Job Added)'
    | 'Departed'
    | 'Freight Check in at Origin'
    | 'Awaiting Arrival at Destination'
    | 'Customs Clearance'
    | 'At Transit Port'
    | 'In Transit to Arrival'
    | 'Destination Stop-off'
    | 'At final Destination'
    | 'Invoices not settled'
    | 'Completed';

export declare type DepartureDateTypes =
    | 'Departure Date'
    | 'Next day'
    | 'Next week'
    | 'Next 2 weeks'
    | 'Next month'
    ;
export declare type PortTypes =
    | 'Registered'
    | 'Senzhen'
    | 'Melbourne'
    | 'Sydney'
    | 'Ho Chi Minh'
    | 'Singapore'
    | 'Samarang'
    | 'NingBo'

export interface IPackages extends IBaseModel<string> {
    companyId: string; //link to company Id
    name: string;
    mode: ModeTypes;
    orderDate: Date,
    arrivalDate: Date,
    status: StatusTypes;
    route: IRoute[],
    originPort?: PortTypes,
    destinationPort: PortTypes,
    customerRef: string[];
    containers: string[];
    supplier: string;
}

export interface IRoute extends IBaseModel<string> {
    packageId: string, //link to packageId
    departureDate: Date,
    arrivalDate: Date,
    originPort?: PortTypes,
    transitPort: PortTypes,
}