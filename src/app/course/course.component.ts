import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  sampleVariable : string;
  id: number;
  constructor(private router: ActivatedRoute) {
    console.log("In Second comp");
  }

  ngOnInit() {
    let snap = this.router.snapshot;
    this.id = snap.params['courseId'];

  }

}
