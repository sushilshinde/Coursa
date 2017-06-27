import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  rForm: FormGroup;
  @Output() submit = new EventEmitter();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.rForm = this.fb.group({
      userName: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  submitForm() {
    this.submit.emit(this.rForm.value);    
  }

}
