import { IMode } from './../interfaces/mode.interface';
import { ModeTypes } from '../types/mode.type';
import { NumberBaseModel } from './base.model';
export class ModeModel extends NumberBaseModel implements IMode {
    mode: ModeTypes;
    constructor(mode: ModeTypes) {
        super();
        this.mode = mode;
    }

    get icon(): string {
        switch (this.mode) {
            case 'Air':
                return '/assets/icons/jobs/u76.png';
            case 'Sea':
                return '/assets/icons/jobs/u138.png';
            case 'Transport':
                return '/assets/icons/jobs/u156.png';
            case 'Warehouse':
                return '/assets/icons/jobs/u156.png';
            case 'Rail':
                return '/assets/icons/jobs/rail.png';

            default:
                return '/assets/icons/jobs/133.png';
        }
    }
}