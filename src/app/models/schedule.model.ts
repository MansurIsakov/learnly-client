import { IClass } from '../common/types/interfaces';

export interface ISchedule {
  id: string;
  owner: string;
  days: {
    monday: IClass[];
    tuesday: IClass[];
    wednesday: IClass[];
    thursday: IClass[];
    friday: IClass[];
    saturday: IClass[];
    sunday: IClass[];
  };
}

export class ScheduleModel implements ISchedule {
  id: string;
  owner: string;
  days: {
    monday: IClass[];
    tuesday: IClass[];
    wednesday: IClass[];
    thursday: IClass[];
    friday: IClass[];
    saturday: IClass[];
    sunday: IClass[];
  };

  constructor(source: ISchedule) {
    this.id = source.id;
    this.owner = source.owner;
    this.days = source.days;
  }
}
