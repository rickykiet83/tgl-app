import * as shortId from 'shortid';

export class BaseModel {
    private _id: string;
    constructor() {
        this._id = shortId.generate();
    }

    get id(): string {
        return this._id;
    }
}