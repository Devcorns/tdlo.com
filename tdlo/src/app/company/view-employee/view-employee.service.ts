import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewEmployeeService {

  empDetails:any;

  constructor() { }

  @Output() change: EventEmitter<boolean> = new EventEmitter();

   getUserInfo(userData) {
     //console.log(userData[0].mobile);
     this.empDetails = userData[0];
     this.change.emit(this.empDetails);
   }
  
}
