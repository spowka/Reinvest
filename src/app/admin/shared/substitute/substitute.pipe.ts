import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'substitute'
})
export class SubstitutePipe implements PipeTransform {

  transform(value: any, arr: any): any {
    return arr.find(f => f.value === value).label;
  }
}
