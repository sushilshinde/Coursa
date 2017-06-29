import { Injectable } from '@angular/core';
import {Http,Headers,Response,RequestOptions} from "@angular/http";
import { environment } from '../../../environments/environment';

import 'rxjs/Rx';

@Injectable()
export class CourseService {
    
    private requestHeaders = new Headers({'Content-Type':'application/json'});
    private requestOptions = new RequestOptions({ headers: this.requestHeaders });

    constructor(private http : Http) {}
    
    getAllCourses(){
        console.log("getAllCourses");
        return this.http.get(`${environment.API_ENDPOINTS.COURSA}/courses/`,
            { headers: this.requestHeaders }
        );
    }

    getCourse(id : number){
        console.log("getCourse id : " + id);
        return this.http.get(`${environment.API_ENDPOINTS.COURSA}/courses/${id}`,
            { headers: this.requestHeaders }
        );
    }

   getCoursesForUniversity(universityId : number){
        console.log("getUniversity id : " + universityId);
        return this.http.get(`${environment.API_ENDPOINTS.COURSA}/courses/university/${universityId}`,
            { headers: this.requestHeaders }
        );
    }

    getCoursesForStudent(studentId : number){
        console.log("getUniversity id : " + studentId);
        return this.http.get(`${environment.API_ENDPOINTS.COURSA}/courses/student/${studentId}`,
            { headers: this.requestHeaders }
        );
    }

}
