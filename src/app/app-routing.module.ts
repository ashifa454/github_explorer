import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RepoListComponent } from './repo-list/repo-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FollowerListComponent } from './follower-list/follower-list.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'users/:username', pathMatch: 'full', component: UserDetailsComponent },
  { path: 'users/:username/repo', pathMatch: 'full', component: RepoListComponent },
  { path: 'users/:username/followers', pathMatch: 'full', component: FollowerListComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
