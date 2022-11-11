import { IClass } from '../common/types/interfaces';

export interface ISchedule {
  id: string;
  owner: string;
  days: [IClass[], IClass[], IClass[], IClass[], IClass[], IClass[], IClass[]];
}

export class ScheduleModel implements ISchedule {
  id: string;
  owner: string;
  days: [IClass[], IClass[], IClass[], IClass[], IClass[], IClass[], IClass[]];

  constructor(source: ISchedule) {
    this.id = source.id;
    this.owner = source.owner;
    this.days = source.days;
  }
}
