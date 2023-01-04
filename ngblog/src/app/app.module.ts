import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainBannerComponent } from './components/main-banner/main-banner.component';
import { FeaturedPostsComponent } from './components/featured-posts/featured-posts.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SvgTitleComponent } from './components/svg-title/svg-title.component';
import { FormsModule } from '@angular/forms';
import { PostThumbnailComponent } from './components/post-thumbnail/post-thumbnail.component'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainBannerComponent,
    FeaturedPostsComponent,
    PostPageComponent,
    HomePageComponent,
    SvgTitleComponent,
    PostThumbnailComponent
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
