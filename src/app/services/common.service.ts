import { Injectable } from '@angular/core';
import { Param } from '../models/param';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {
    //
  }

  static addParams(params: Param[]): string {
    let ret: string = '';
    let first: boolean = true;
    params.forEach((param: Param) => {
      if (param.value !== undefined) {
        ret += (first ? '?' : '&') + param.name + '=' + param.value;
        first = false;
      }
    });
    return ret;
  }
}
