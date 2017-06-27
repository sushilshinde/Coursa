import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-course-contents',
  templateUrl: './course-contents.component.html',
  styleUrls: ['./course-contents.component.css']
})
export class CourseContentsComponent implements OnInit {

  @Input() content;

  constructor() { }

  ngOnInit() {
    console.log("Print content item")
    console.log("asdasda"+this.content)
  }

}
