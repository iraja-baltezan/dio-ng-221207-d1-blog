import { Component, Input } from '@angular/core';
import { IPost } from 'src/app/model/i-post';

@Component({
  selector: 'app-post-thumbnail',
  templateUrl: './post-thumbnail.component.html',
  styleUrls: ['./post-thumbnail.component.scss']
})
export class PostThumbnailComponent {

  @Input()
  size: number = 0;

  @Input()
  post: IPost = {
    id: 0,
    title: 'Título da postagem',
    body: 'Lorem ipsum etc.',
    featuredImgUrl: 'https://picsum.photos/720/320',
    author: 'Autor Beltrano',
    categories: ['Categoria Um'],
    createdAt: '2023-01-03',
    updatedAt: '2023-01-03',
  }

  cssSize: string = '-size' + this.size;
  title: string = '';
  titleSvg: string = '';

  ngOnInit(){
    if (this.size == 0){
      const titleArray: string[] = this.post.title.split(' ');
      titleArray.map((titlePart, index)=>{
        if (index < 2){
          this.titleSvg += titlePart + ' '
        }
        else {
          this.title += titlePart + ' ';
        }
      })
    }
    else {
      this.title = this.post.title;
    }
    this.cssSize = '-size' + Math.min(this.size, 6);
  }
}
