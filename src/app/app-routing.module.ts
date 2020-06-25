import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { PostComponent } from './components/post/post.component';
import { NavigationComponent } from './components/navigation/navigation.component';


const routes: Routes = [
  { path: '', component: NavigationComponent, children: [
    { path: 'blog', component: BlogComponent },
    { path: 'blog/:id', component: PostComponent },
  ]},
  
  { path: '', redirectTo: 'blog', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
