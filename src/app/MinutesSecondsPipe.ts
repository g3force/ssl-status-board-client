import {Pipe, PipeTransform} from '@angular/core';
import {String} from 'typescript-string-operations';


@Pipe({
  name: 'minuteSeconds'
})
export class MinuteSecondsPipe implements PipeTransform {

  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return String.Format('{0:0}:{0:00}', minutes, (value - minutes * 60));
  }
}
