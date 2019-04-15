import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  host = 'localhost:3000';


  constructor(private http:HttpClient) { }
  
  get(url,data) {
    
  return this.http.get(this.host+'/'+url,data);
  
}

}
