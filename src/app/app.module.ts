import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainAboutComponent } from './main-about/main-about.component';
import { NavbarComponent } from './MainPage/navbar/navbar.component';
import { BannerComponent } from './MainPage/banner/banner.component';
import { AboutusComponent } from './MainPage/aboutus/aboutus.component';
import { ServicessComponent } from './MainPage/servicess/servicess.component';
import { BlogComponent } from './MainPage/blog/blog.component';
import { CasestudiesComponent } from './MainPage/casestudies/casestudies.component';
import { ContactComponent } from './MainPage/contact/contact.component';
import { IntroComponent } from './MainAbout/intro/intro.component';
import { TestimonialComponent } from './MainAbout/testimonial/testimonial.component';
import { CommitComponent } from './MainAbout/commit/commit.component';
import { AboutnavComponent } from './MainAbout/aboutnav/aboutnav.component';
import { AboutfootComponent } from './MainAbout/aboutfoot/aboutfoot.component';
import { MainBlogComponent } from './main-blog/main-blog.component';
import { BlognavComponent } from './MainBlog/blognav/blognav.component';
import { BlogpostComponent } from './MainBlog/blogpost/blogpost.component';
import { TryblogComponent } from './MainBlog/tryblog/tryblog.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MainAboutComponent,
    NavbarComponent,
    BannerComponent,
    AboutusComponent,
    ServicessComponent,
    BlogComponent,
    CasestudiesComponent,
    ContactComponent,
    IntroComponent,
    TestimonialComponent,
    CommitComponent,
    AboutnavComponent,
    AboutfootComponent,
    MainBlogComponent,
    BlognavComponent,
    BlogpostComponent,
    TryblogComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
