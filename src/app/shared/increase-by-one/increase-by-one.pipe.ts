import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'increaseByOne'
})
export class IncreaseByOnePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    return value + 1;
  }

}
