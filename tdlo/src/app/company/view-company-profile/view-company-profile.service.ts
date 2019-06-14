import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewCompanyProfileService {
  isAddCompanyVisible: any;

  constructor() { }


  @Output() change: EventEmitter<boolean> = new EventEmitter();

  getUserInfo(userData) {
    //console.log(userData[0].mobile);
    
    this.change.emit(this.isAddCompanyVisible);
  }
}
