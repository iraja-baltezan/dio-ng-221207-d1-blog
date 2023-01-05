import { Pipe, PipeTransform } from '@angular/core';

// Número de caracteres extraídos do corpo da postagem.
const EXCERPT_LENGTH = 100;

@Pipe({
  name: 'postExcerpt'
})
export class PostExcerptPipe implements PipeTransform {

  transform(value: string, length: number): string {
    let result: string = value;
    if (value.length > EXCERPT_LENGTH)
      result = value.substring(0, EXCERPT_LENGTH);
    return result + '...';
  }

}
