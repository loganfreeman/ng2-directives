import { Pipe, PipeTransform } from 'angular2/core';
@Pipe({name: 'capitalFirstLetter'})
export class CapitalFirstPipe implements PipeTransform {
  public transform(value: string): string {
    if (value === undefined) {
      return '';
    }
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
