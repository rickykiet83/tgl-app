import { IBaseModel } from "./base.interface";
import { IRoute } from "./route.interface";
import { ModeTypes } from "../types/mode.type";
import { PortTypes } from "../types/port.type";
import { StatusTypes } from "../types/status.type";

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