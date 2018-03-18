import {Pipe, PipeTransform} from '@angular/core';
import {String} from 'typescript-string-operations';


@Pipe({
  name: 'minuteSeconds'
})
export class MinuteSecondsPipe implements PipeTransform {

  transform(value: number): string {
    const seconds: number = Math.round(value / 1000000);
    const minutes: number = Math.floor(seconds / 60);
    return String.Format('{0:0}:{1:00}', minutes, (seconds - minutes * 60));
  }
}
