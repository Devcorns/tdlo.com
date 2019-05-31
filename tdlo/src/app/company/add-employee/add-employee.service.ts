import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddEmployeeService {

  constructor() { }


  isAvailable = true;

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  isUserAvailable(value:boolean) {
    this.isAvailable = value;
    this.change.emit(this.isAvailable);
  }

  
}
