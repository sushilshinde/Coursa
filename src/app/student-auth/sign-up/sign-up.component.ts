import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

 rForm: FormGroup;
  @Output() submit = new EventEmitter();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.rForm = this.fb.group({
      userName: [null, Validators.required],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  submitForm() {
    this.submit.emit(this.rForm.value);    
  }

}
