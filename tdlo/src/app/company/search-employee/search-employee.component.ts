import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { Config } from 'protractor';
import { AddEmployeeService } from '../add-employee/add-employee.service';
import { SearchEmployeeService } from './search-employee.service';
import { ViewEmployeeService } from '../view-employee/view-employee.service';



@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.sass']
})
export class SearchEmployeeComponent implements OnInit {

  constructor(private gs: GlobalService, private addEmployeeService: AddEmployeeService, private viewEmployeeService: ViewEmployeeService ) { }

  ngOnInit() {
  }
  
  searchEmployee (data) {
    console.log(data.target.searchEmployee.value);
    this.gs.get("api/user/search-employee", data.target.searchEmployee.value).subscribe( (response: Config) => {
      if( response.status ) {
        console.log("user found", response);
        this.addEmployeeService.isUserAvailable(false);
        this.viewEmployeeService.getUserInfo(response.message);
      } else {
        console.log("user not found");
        this.addEmployeeService.isUserAvailable(true);
      }
      //console.log(response.status);
    })
  }

}
