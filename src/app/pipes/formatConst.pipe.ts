import { Pipe, PipeTransform } from '@angular/core';
import { IConst } from '../common/types/interfaces';

@Pipe({
  name: 'formatConst',
})
export class FormatConstPipe implements PipeTransform {
  transform(value: string | number, constant: IConst[]): string | number {
    if (value === null || value === undefined) {
      return value;
    }

    if (constant.length < 0) {
      return value;
    }

    const index = constant.findIndex((el: IConst) => el.target === value);

    return index > -1 ? constant[index].name : '';
  }
}
