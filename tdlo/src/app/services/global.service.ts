import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GlobalService {
//public headers = new HttpHeaders({'Content-Type': 'application/json'});
configUrl = 'http://localhost:3000/';

constructor(private http:HttpClient) {
  console.log("I am in Global Service")  
}

setCors() {
  return new HttpHeaders().set('Access-Control-Allow-Origin', '*');
}


get(url,data) {
   
  //  this.setCors(this.headers);
  //  console.log(this.headers);

  console.log("gloabl service",url,typeof data);
  
  let headers: HttpHeaders = this.setCors();
  
  console.log(headers,"Requested url => ",this.configUrl+url);

  return this.http.get(this.configUrl+url,{headers: headers, params:{"search_term": data}});

}


post(url,data) {
   
  //  this.setCors(this.headers);
  //  console.log(this.headers); 
 
  let headers: HttpHeaders = new HttpHeaders().set('Access-Control-Allow-Origin', '*').set('Content-Type','application/json');
  console.log(headers);
  return this.http.post(this.configUrl+url,data,{headers:headers});

}

}
