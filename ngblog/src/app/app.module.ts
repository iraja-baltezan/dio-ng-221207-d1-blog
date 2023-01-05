import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { FeaturedPostsComponent } from './components/featured-posts/featured-posts.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SvgTitleComponent } from './components/svg-title/svg-title.component';
import { FormsModule } from '@angular/forms';
import { PostThumbnailComponent } from './components/post-thumbnail/post-thumbnail.component';
import { PostExcerptPipe } from './pipes/post-excerpt.pipe';
import { ButtonComponent } from './components/button/button.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    FeaturedPostsComponent,
    PostPageComponent,
    HomePageComponent,
    SvgTitleComponent,
    PostThumbnailComponent,
    PostExcerptPipe,
    ButtonComponent,
    MainFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
