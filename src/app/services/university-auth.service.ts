import { Injectable } from '@angular/core';
import {Http,Headers,Response} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class UniversityAuthService {

    constructor(private http : Http) {}
    
    signIn(user){
        console.log("AuthService.signIn");
        console.log(user);
        return this.http.get("https://angularbackend-c4dcd.firebaseio.com/data.json")
        .map((res : Response) => {            
            return res.json()
        });
    }
    
    signUp(user){
        console.log("AuthService.signIn");
        console.log(user);
        const headers = new Headers({'Content-Type':'application/json'});
        return this.http.post("https://angularbackend-c4dcd.firebaseio.com/data.json",
            {headers:headers}
        );
    }
}
