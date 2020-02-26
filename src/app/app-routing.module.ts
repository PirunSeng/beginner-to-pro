import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FollowersComponent } from './followers/followers.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { PostsComponent } from './posts/posts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArchiveDetailComponent } from './archive-detail/archive-detail.component';
import { ArchivesComponent } from './archives/archives.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'followers/:id/:username', component: ProfileComponent
  },
  {
    path: 'followers', component: FollowersComponent
  },
  {
    path: 'posts', component: PostsComponent
  },
  {
    path: 'archives/:year/:month', component: ArchiveDetailComponent
  },
  {
    path: 'archives', component: ArchivesComponent
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
