import * as shortId from 'shortid';

import { IBaseModel } from '../interfaces/base.interface';

export abstract class BaseModel<T> implements IBaseModel<T> {
    constructor(protected _id?: T) {
        this._id = _id;
    }

    abstract get id(): T;
}

export class StringBaseModel extends BaseModel<string> {
    constructor(protected _id?: string) {
        super(_id);
    }

    get id(): string {
        return (this._id !== null && this._id !== undefined) ? this._id : this._id = shortId.generate();
    }
}

export class NumberBaseModel extends BaseModel<number> {
    constructor(protected _id?: number) {
        super(_id);
    }

    get id(): number {
        return (this._id !== null && this._id !== 0) ? this._id : this._id = new Date().getTime();
    }
}