import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GlobalService {
//public headers = new HttpHeaders({'Content-Type': 'application/json'});
configUrl = 'http://localhost:3000/';

constructor(private http:HttpClient) {
  console.log("I am Auth Service")  
}

setCors() {
  return new HttpHeaders().set('Access-Control-Allow-Origin', '*');
}


get(url) {
   
  //  this.setCors(this.headers);
  //  console.log(this.headers); 

  let headers: HttpHeaders = this.setCors();
  console.log(headers);
  
  this.http.get(this.configUrl+url,{headers: headers}).subscribe(function(res) {
   
    console.log("Gets Called", res);

 });

}
post(url) {
   
  //  this.setCors(this.headers);
  //  console.log(this.headers); 

  let headers: HttpHeaders = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
  console.log(headers);
  this.http.get(this.configUrl+url,{headers: headers}).subscribe(function(res) {
   
    console.log("Get Called", res);

 })

}

}
