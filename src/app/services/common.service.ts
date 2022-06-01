import { Injectable } from '@angular/core';
import { Param } from '../models/param';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {
    //
  }

  static addParams(params: Param[]) {
    let ret = '';
    let first = true;
    params.forEach((param) => {
      if (param.value !== undefined) {
        ret += (first ? '?' : '&') + param.name + '=' + param.value;
        first = false;
      }
    });
    return ret;
  }
}
