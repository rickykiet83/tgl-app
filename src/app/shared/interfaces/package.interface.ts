import { IBaseModel } from "./base.interface";
import { IRoute } from "./route.interface";
import { ModeTypes } from "../types/mode.type";
import { PortTypes } from "../types/port.type";
import { StatusTypes } from "../types/status.type";

export interface IPackage extends IBaseModel<string> {
    companyId: string; //link to company Id
    name: string;
    mode: ModeTypes;
    orderDate: Date,
    arrivalDate: Date,
    status: StatusTypes;
    routes: IRoute[],
    originPort?: PortTypes,
    destinationPort: PortTypes,
    customerRef: string[];
    containers: string[];
    supplier: string;
}

export interface IFilterPackage {
    mode: ModeTypes,
    status: StatusTypes,
    port: PortTypes,
}