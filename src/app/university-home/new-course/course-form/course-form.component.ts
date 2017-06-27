import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  rForm: FormGroup;
  @Input() formValues;

  @Output() submit = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.rForm = this.fb.group({
      title: [null, Validators.required],
      path: [null, Validators.required]
    });
  }

  submitForm() {
    console.log("---------- Form submit -------------");
    this.formValues = this.rForm.value;
    console.log(this.rForm.value);
    this.submit.emit(this.rForm.value);    
  }



}