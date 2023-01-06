import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { PostEditPageComponent } from './pages/post-edit-page/post-edit-page.component';

const routes: Routes = [
  {
    path: 'home',
    title: 'Início',
    component: HomePageComponent,
  },
  {
    path: 'post/:id',
    title: 'Post',
    component: PostPageComponent,
  },
  {
    path: 'post/:id/edit',
    title: 'Post edit',
    component: PostEditPageComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
