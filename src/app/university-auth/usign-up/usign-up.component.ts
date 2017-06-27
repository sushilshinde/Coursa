import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-usign-up',
  templateUrl: './usign-up.component.html',
  styleUrls: ['./usign-up.component.css']
})
export class USignUpComponent implements OnInit {

  rForm: FormGroup;
  @Output() submit = new EventEmitter();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.rForm = this.fb.group({
      universityName: [null, Validators.required],
      country: [null, Validators.required],
      alphaTwoCode: [null, Validators.required],
      webPage: [null, Validators.required],
      domain: [null, Validators.required],
      userName: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  submitForm() {
    console.log("USignUpComponent submiiting");
    console.log(this.rForm.value);
    this.submit.emit(this.rForm.value);
  }

}
