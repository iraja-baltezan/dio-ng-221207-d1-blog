import { Component } from '@angular/core';
import { MOCK_POSTS } from 'src/app/data/mock-posts';
import { IPost } from 'src/app/model/i-post';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent {

  id?: number;
  post?: IPost;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => {
        this.id = Number(params.get('id'));
        return this.blogService
          .getPostById(this.id);
      })
    )
    .subscribe(post => this.post = post);
  }
}
