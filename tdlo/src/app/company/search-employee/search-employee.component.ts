import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

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
    this.gs.get("api/user/search-employee",data.target.searchEmployee.value).subscribe(data=>{
      console.log(data);
    })
  }

}
