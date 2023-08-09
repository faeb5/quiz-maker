import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decodeHtml',
})
export class DecodeHtmlPipe implements PipeTransform {
  transform(value: string): string | null {
    return new DOMParser().parseFromString(value, 'text/html').documentElement
      .textContent;
  }
}
