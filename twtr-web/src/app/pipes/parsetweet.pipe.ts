import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { split, forEach, startsWith } from 'lodash';

@Pipe({
  name: 'parsetweet'
})
export class ParsetweetPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}

  transform(text: any, args?: any): any {
    return this.markTag(text);
  }

  private markTag(text: string): string {
    let parsedText = '';
    if (text && text.length > 0) {
      const textArr = split(text, ' ');
      forEach(textArr, value => {
        if (
          startsWith(value, '@') ||
          startsWith(value, '#') ||
          startsWith(value, 'https')
        ) {
          parsedText += `<a href="#${value.substring(1)}">${value}</a> `;
        } else {
          parsedText += value + ' ';
        }
      });
      return parsedText;
    } else {
      return text;
    }
  }
}
