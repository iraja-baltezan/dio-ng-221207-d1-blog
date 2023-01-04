import { Component } from '@angular/core';
import { IPost } from 'src/app/model/i-post';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements IPost {
  id: number = 0;
  body: string = '';
  featuredImgUrl: string = '';
  author: string = '';
  categories: string[] = [];
  createdAt: string = '';
  updatedAt: string = '';
  title: string = '';
}
