import { Component, OnInit } from '@angular/core';
import { CourseService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {


  tiles = [
    { text: 'Machine Learning', price: "Free", synop: "This course is specially designed for working professsions.", color: 'purple lighten-4' },
    { text: 'Data Science', price: "$24", synop: "This course is specially designed for working student.", color: 'blue lighten-4' },
    { text: 'Artifitial Intelligence', price: "$50", synop: "This is advanced course is specially designed for working professsions.", color: ' orange lighten-4' }
  ];

  courses;

  constructor(private courseService : CourseService) { }

  ngOnInit() {
     this.courseService.getAllCourses().subscribe((res) => {
       this.courses = res;
     },() => {});
  }

}
