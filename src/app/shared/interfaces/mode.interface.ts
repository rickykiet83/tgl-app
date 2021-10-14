import { IBaseModel } from './base.interface';
import { ModeTypes } from '../types/mode.type';
export interface IMode extends IBaseModel<number> {
    mode: ModeTypes;
    icon: string;
}