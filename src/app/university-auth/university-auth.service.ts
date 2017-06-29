import { Injectable } from '@angular/core';
import {Http,Headers,Response,RequestOptions} from "@angular/http";
import { environment } from '../../environments/environment';

import 'rxjs/Rx';

@Injectable()
export class UniversityAuthService {
    
    private requestHeaders = new Headers({'Content-Type':'application/json'});
    private requestOptions = new RequestOptions({ headers: this.requestHeaders });

    constructor(private http : Http) {}
    //This is service
    signIn(user){
        console.log("AuthService.signIn");
        console.log(user);

        return this.http.post(`${environment.API_ENDPOINTS.COURSA}/universities/signin`,{user},
            { headers: this.requestHeaders }
        );
    }
    
    signUp(user){
        console.log("AuthService.signIn");
        console.log(user);
        
        return this.http.post(`${environment.API_ENDPOINTS.COURSA}/universities/signup`, {user},
            { headers: this.requestHeaders }
        );
    }
}
