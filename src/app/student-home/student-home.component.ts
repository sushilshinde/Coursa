import { Component, OnInit } from '@angular/core';
import { CourseService } from '../content/courses/courses.service';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {

  courses;
  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courseService.getCoursesForStudent(123).subscribe((res) => {
      this.courses = res;
    }, () => { });
  }
}
