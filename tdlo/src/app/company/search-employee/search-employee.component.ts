import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { Config } from 'protractor';



@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.sass']
})
export class SearchEmployeeComponent implements OnInit {

  constructor(private gs: GlobalService ) { }

  ngOnInit() {
  }

  searchEmployee (data) {
    console.log(data.target.searchEmployee.value);
    this.gs.get("api/user/search-employee",data.target.searchEmployee.value).subscribe( (response: Config) => {
      if( response.status ) {
        console.log("user found");
      }
      else {
        console.log("user not found");
      }
      //console.log(response.status);
    })
  }

}
