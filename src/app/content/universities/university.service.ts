import { Injectable } from '@angular/core';
import {Http,Headers,Response,RequestOptions} from "@angular/http";
import { environment } from '../../../environments/environment';

import 'rxjs/Rx';

@Injectable()
export class UniversityService {
    
    private requestHeaders = new Headers({'Content-Type':'application/json'});
    private requestOptions = new RequestOptions({ headers: this.requestHeaders });

    constructor(private http : Http) {}
    
    getAllUniversities(){
        console.log("getAllUniversities");
        return this.http.get(`${environment.API_ENDPOINTS.COURSA}/universities/`,
            { headers: this.requestHeaders }
        );
    }

    getUniversity(id : number){
        console.log("getUniversity id : " + id);
        return this.http.get(`${environment.API_ENDPOINTS.COURSA}/university/${id}`,
            { headers: this.requestHeaders }
        );
    }




}
