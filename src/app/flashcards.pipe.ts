import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class CountryPipe implements PipeTransform {
  transform(items: any[], message: string): any[]{
    if (!message) return items;
    return items.filter((it: any)=> it.Category === message);
  }
}
