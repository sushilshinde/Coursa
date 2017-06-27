import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MdGridListModule, MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { UniversitiesComponent } from './content/universities/universities.component';
import { CoursesComponent } from './content/courses/courses.component';
import { BannerComponent } from './content/banner/banner.component';
import { CurtailTextPipe } from './pipes/curtexttextpipe.pipe';
import { AppRouting,rountingComps } from './app.routing';
import { StudentAuthComponent } from './student-auth/student-auth.component';
import { SignUpComponent } from './student-auth/sign-up/sign-up.component';
import { SignInComponent } from './student-auth/sign-in/sign-in.component';

import { StudentHomeComponent } from './student-home/student-home.component';
import { CourseComponent } from './courses/course/course.component';
import { UniversityHomeComponent } from './university-home/university-home.component';
import { NewCourseComponent } from './university-home/new-course/new-course.component';
import { CourseContentsComponent } from './university-home/new-course/course-contents/course-contents.component';
import { CourseFormComponent } from './university-home/new-course/course-form/course-form.component';
import { UniversityAuthComponent } from './university-auth/university-auth.component';
import { USignUpComponent } from './university-auth/usign-up/usign-up.component';

import {StudentAuthService} from './services/student-auth.service';
import {UniversityAuthService} from './services/university-auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    UniversitiesComponent,
    CoursesComponent,
    BannerComponent,
    CurtailTextPipe,
    rountingComps,
    StudentAuthComponent,
    SignUpComponent,
    SignInComponent,
    StudentHomeComponent,
    CourseComponent,
    UniversityHomeComponent,
    NewCourseComponent,
    CourseContentsComponent,
    CourseFormComponent,
    UniversityAuthComponent,
    USignUpComponent    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,   
    ReactiveFormsModule, 
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdGridListModule,
    AppRouting    

  ],
  providers: [StudentAuthService,UniversityAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
