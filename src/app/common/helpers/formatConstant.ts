import { IConst } from '../types/interfaces';

export function formatConstant(target: string, constant: IConst[]): string {
  const index = constant.findIndex((el: IConst) => el.target === target);
  return index > -1 ? constant[index].name : '';
}
