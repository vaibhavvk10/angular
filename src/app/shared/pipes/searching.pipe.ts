import { Pipe, PipeTransform } from '@angular/core';
import { isNullOrUndefined } from 'util';
@Pipe({ name: 'searchBy' })
export class SearchByPipe implements PipeTransform {
  transform(records: Array<any>, searchText: any): any {
    if (isNullOrUndefined(searchText) || searchText === '') {
      return records;
    }
    return records.filter(function (record) {
      return record.categoryName.toLowerCase().indexOf(searchText.toLowerCase());
    });
  }
}
