import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-comapny-profile',
  templateUrl: './comapny-profile.component.html',
  styleUrls: ['./comapny-profile.component.sass']
})
export class ComapnyProfileComponent implements OnInit {
  @Input() get:String;
  constructor() { 
    console.log("this is companyData passed from home component",this.get);
  }

  ngOnInit() {
  }

}
