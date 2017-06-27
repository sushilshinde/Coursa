import { ContentComponent } from './content/content.component';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './content/courses/courses.component';
import { UniversitiesComponent } from './content/universities/universities.component';
import { NgModule } from '@angular/core';
import { StudentAuthComponent } from './student-auth/student-auth.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { CourseComponent } from './course/course.component';
import { UniversityHomeComponent } from './university-home/university-home.component';
import { NewCourseComponent } from './university-home/new-course/new-course.component';
import { UniversityAuthComponent } from './university-auth/university-auth.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'welcome', component: ContentComponent },
    { path: 'courses', component: CoursesComponent },
    { path: 'universities', component: UniversitiesComponent},
    {path:'app-student-auth', component: StudentAuthComponent },
    {path:'app-student-auth:/courseId', component: StudentAuthComponent },
    {path:'course/:courseId', component: CourseComponent },
    {path:'university', component: UniversityAuthComponent },
    {path:'home/university', component: UniversityHomeComponent },
    {path:'home/student', component: StudentHomeComponent },
    {path:'home/university/new-course', component: NewCourseComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRouting { }
export const rountingComps = [ContentComponent, UniversitiesComponent, UniversitiesComponent,StudentAuthComponent,StudentHomeComponent,CourseComponent,NewCourseComponent];
