import { Component, OnInit } from '@angular/core';
import { StudentAuthService } from './student-auth.service';

@Component({
  selector: 'app-student-auth',
  templateUrl: './student-auth.component.html',
  styleUrls: ['./student-auth.component.css']
})
export class StudentAuthComponent implements OnInit {

  constructor(private authService: StudentAuthService) { }

  ngOnInit() {
  }

  signIn(formData) {
    this.authService.signIn(formData).subscribe(
      (res) => {

      }, (err) => {

      });    
  }

  signUp(formData) {
    console.log(formData);
  }

}
