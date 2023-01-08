import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { FeaturedPostsComponent } from './components/featured-posts/featured-posts.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SvgTitleComponent } from './components/svg-title/svg-title.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostThumbnailComponent } from './components/post-thumbnail/post-thumbnail.component';
import { PostExcerptPipe } from './pipes/post-excerpt.pipe';
import { ButtonComponent } from './components/button/button.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { PostEditPageComponent } from './pages/post-edit-page/post-edit-page.component'; // <-- NgModel lives here

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
    MainFooterComponent,
    PostEditPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService,
      { dataEncapsulation: false }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
