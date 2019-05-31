import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ViewEmployeeService } from './view-employee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.sass']
})
export class ViewEmployeeComponent implements OnInit {

  viewEmployee = [];   

  constructor(private viewEmployeeService: ViewEmployeeService, private changeDetection: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.viewEmployeeService.change.subscribe(
      data => {
        this.viewEmployee = [];
        this.viewEmployee.push(data);
        this.changeDetection.detectChanges();
        console.log(this.viewEmployee[0]);
      }
    )
    
  }

}
