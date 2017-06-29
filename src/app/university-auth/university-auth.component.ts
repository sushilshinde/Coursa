import { Component, OnInit } from '@angular/core';
import { UniversityAuthService } from './university-auth.service';

@Component({
  selector: 'app-university-auth',
  templateUrl: './university-auth.component.html',
  styleUrls: ['./university-auth.component.css']
})
export class UniversityAuthComponent implements OnInit {


  constructor(private authService: UniversityAuthService) { }

  ngOnInit() {
  }



  signIn(formData) {
    if (formData && formData.universityName || formData.userName) {
      this.authService.signIn(formData).subscribe(
        (res) => {

        }, (err) => {

        });
    }
  }
  signUp(formData: any) {
    console.log("In UniversityAuthComponent");
    if (formData && formData.universityName || formData.userName) {
      this.authService.signIn(formData).subscribe(() => { }, () => { });
    }
  }

}
