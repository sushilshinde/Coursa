import { Component, OnInit } from '@angular/core';
import { UniversityService } from './university.service';

@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  styleUrls: ['./universities.component.css']
})
export class UniversitiesComponent implements OnInit {


tiles = [
    { text: 'Harvard', cols: 3, rows: 1, color: 'blue-grey lighten-4' },
    { text: 'Standford', cols: 1, rows: 2, color: 'grey lighten-2' },
    { text: 'Yale', cols: 1, rows: 1, color: 'brown lighten-4' }
  ];
 

  universities;

  constructor(private universityService : UniversityService) { }

  ngOnInit() {
     this.universityService.getAllUniversities().subscribe((res) => {
       this.universities = res;
     },() => {});
  }

}
