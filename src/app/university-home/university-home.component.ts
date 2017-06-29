import { Component, OnInit } from '@angular/core';
import { CourseService } from '../content/courses/courses.service';

@Component({
  selector: 'app-university-home',
  templateUrl: './university-home.component.html',
  styleUrls: ['./university-home.component.css']
})
export class UniversityHomeComponent implements OnInit {

  courses;
  constructor(private courseService : CourseService) { }

  ngOnInit() {
     this.courseService.getCoursesForUniversity(123).subscribe((res) => {
       this.courses = res;
     },() => {});
  }

}
