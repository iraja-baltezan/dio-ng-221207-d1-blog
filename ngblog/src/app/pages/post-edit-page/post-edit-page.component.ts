import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { IPost } from 'src/app/model/i-post';
import { BlogService } from 'src/app/services/blog.service';
import { POST_BLANK } from 'src/app/data/post-blank';
import { Location } from '@angular/common';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ICategory } from 'src/app/model/i-category';

@Component({
  selector: 'app-post-edit-page',
  templateUrl: './post-edit-page.component.html',
  styleUrls: ['./post-edit-page.component.scss']
})
export class PostEditPageComponent {

  post: IPost = POST_BLANK;
  categories?: string[];

  postForm = this.formBuilder.group({
    title: [this.post.title, Validators.required],
    body: [this.post.body, Validators.required],
    author: [this.post.author, Validators.required],
    categories: [this.post.categories, Validators.required],
    featuredImgUrl: [this.post.featuredImgUrl, Validators.required]
  })

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.getPost();
    this.getCategories();
  }

  getPost() {
    this.route.paramMap
      .pipe(
        switchMap(params => {
          const id = Number(params.get('id'));
          return this.blogService
            .getPostById(id);
        })
      )
      .subscribe(post => {
        this.post = post;
        this.postForm.patchValue(post)
      });
  }

  savePost() {
    const formValue = this.postForm.value;
    if (this.postForm.status!='VALID'){
      alert('Post edit form ' + this.postForm.status);
      return;
    }

    this.post = {
      ...this.post,
      title: String(formValue.title),
      body: String(formValue.body),
      author: String(formValue.author),
      featuredImgUrl: String(formValue.featuredImgUrl),
      categories: formValue.categories ? formValue.categories: [],
      updatedAt: new Date().toJSON(),
    }
    console.log(this.post)
    this.blogService
    .updatePost(this.post as IPost)
    // .subscribe(status => console.log(`Post update status: ${status}`));
  }

  getCategories() {
    this.blogService
      .getCategories()
      .subscribe(
        categories => {
          this.categories = categories.map(
            category => category.title
          );
        }
      );
  }

  goBack(): void {
    this.location.back();
  }
}
