import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgCustomTableService {

  constructor() { }

  checkAndAddInputType(data: any): any {
    data.forEach(col => {
      if (col.inputType == undefined || col.inputType == null || col.inputType == "") {
        col.inputType = 'String';
      }
    });
    return data;
  }
}
