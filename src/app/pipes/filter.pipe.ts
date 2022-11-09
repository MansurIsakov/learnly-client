import { Pipe, PipeTransform } from '@angular/core';
import { IModule } from '../models/module.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(
    value: IModule[],
    filterString: string | number,
    propName: string
  ): any {
    if (
      value.length === 0 ||
      filterString === undefined ||
      filterString === ''
    ) {
      return value;
    }
    const resultArray = [];

    for (const item of value) {
      if (item[propName] === filterString) {
        resultArray.push(item);
      }
    }

    return resultArray;
  }
}
