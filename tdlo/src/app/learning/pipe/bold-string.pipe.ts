import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boldString'
})
export class BoldStringPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
