import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {

  courseTitle: string;
  chapterTitle: string;
  path: string;

  contents = [];

  @Output() submit = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  submitForm() {
    let newContent = { courseTitle: this.courseTitle, contents: this.contents };
    console.log(newContent);
  }

  addChapter() {
    console.log();
    this.contents.push({ chapterTitle: this.chapterTitle, path: this.path });
    this.chapterTitle = "";
    this.path = "";
  }

  deleteChapter(i: number) {
    this.contents.splice(i, 1);
  }
}
