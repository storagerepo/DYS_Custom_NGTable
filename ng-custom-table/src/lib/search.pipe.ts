import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filter'
})
export class SearchPipe implements PipeTransform {

    transform(items: any[], columns: any[], value: string): any[] {
        let jsonValue = JSON.parse(value);
        let fields = [];
        columns.forEach(field => {
            if (field.filterString) {
                fields.push(field.columnObj);
            }
        })

        if (!items || items.length === 0) {
            return [-1];
        }
        if (!fields || Object.keys(jsonValue).length === 0) {
            return items;
        }
        let allFilter = items.filter(
            singleItem => {
                let selected = true;
                for (let field of fields) {
                    if (jsonValue[field] != undefined && jsonValue[field] != "") {
                        if (!singleItem[field].toString().toLowerCase().includes(jsonValue[field].toLowerCase())) {
                            selected = false;
                        }
                    }
                }
                return selected;
            });
        if (jsonValue["all"] != undefined && jsonValue["all"] != "") {
            allFilter = allFilter.filter(
                singleItem => {
                    for (let field of fields) {
                        if (singleItem[field] != undefined) {
                            if (singleItem[field].toString().toLowerCase().includes(jsonValue["all"].toLowerCase())) {
                                return true;
                            }
                        }
                    }
                });
        }

        if (allFilter.length > 0) {
            return allFilter;
        } else {
            allFilter = [-1];
            return allFilter;
        }

    }

}