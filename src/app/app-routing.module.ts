import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { MainAboutComponent } from './main-about/main-about.component';
import { MainBlogComponent } from './main-blog/main-blog.component';

const routes: Routes = [
  {
    path:'home',
    component:MainPageComponent,
    pathMatch:'full'
  },{
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'about',
    component:MainAboutComponent,
    pathMatch:'full'
  },
  {
    path:'blog',
    component:MainBlogComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
