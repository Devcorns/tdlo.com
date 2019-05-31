import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchEmployeeService {

  constructor() {
    console.log("Search Employee Service called")
   }

  //  empDetails:any;

  //  @Output() change: EventEmitter<boolean> = new EventEmitter();

  //  isUserAvailable(value:boolean) {
  //    this.empDetails = value;
  //    this.change.emit(this.empDetails);
  //  }


}
