import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
//import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  //public headers = new HttpHeaders({'Content-Type': 'application/json'});
  configUrl = 'http://localhost:3000/api/auth/login';

  constructor(private http:HttpClient) {
    console.log("I am Auth Service")  
  }

  setCors(headers: HttpHeaders) {
     headers.append('Access-Control-Allow-Origin', '*');
  }
 

  post(url) {
     
    //  this.setCors(this.headers);
    //  console.log(this.headers); 

    let headers: HttpHeaders = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
      
    
        
        // headers.append('Access-Control-Allow-Methods', 'GET');
        // headers.append('Access-Control-Allow-Origin', '*');
        console.log(headers);
    this.http.post<any>(this.configUrl,'hello',{headers:headers}).subscribe(function(res){
     console.log("Post Called", res);
   })
  }

}
