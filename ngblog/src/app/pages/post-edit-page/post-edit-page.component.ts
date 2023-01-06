import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { IPost } from 'src/app/model/i-post';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-post-edit-page',
  templateUrl: './post-edit-page.component.html',
  styleUrls: ['./post-edit-page.component.scss']
})
export class PostEditPageComponent {
  post?: IPost;

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = Number(params.get('id'));
        return this.blogService
          .getPostById(id);
      })
    )
      .subscribe(post => this.post = post);
  }

  savePost(){
    console.log('save post')
  }
}
