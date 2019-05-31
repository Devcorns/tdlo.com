import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { AddEmployeeService } from './add-employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.sass']
})
export class AddEmployeeComponent implements OnInit {
  empDetails: any;
  userAvailable:boolean = false;
  constructor(private changeDetection: ChangeDetectorRef, private addEmployeeService: AddEmployeeService, private route: ActivatedRoute, private gs: GlobalService, public cdr: ChangeDetectorRef, private fb: FormBuilder) { 

    this.empDetails = this.fb.group({

      fname : new FormControl('',[Validators.required,Validators.minLength(3)]),
      last : new FormControl('',[Validators.required,Validators.minLength(2)]),
      designation : new FormControl('',[Validators.required,Validators.minLength(5)]),
      Experience : new FormControl('',[Validators.required,Validators.minLength(1)]),
      cntryCode : new FormControl('',[Validators.required,Validators.minLength(1)]),
      empMobile : new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(20)])

    });
  }

 

  sendDetails (emp) {

    console.log(emp.value);
    this.gs.post('api/user/add-employee', emp.value).subscribe(function(data) {
      console.log(data)
    });
  }


  ngOnInit() {
    this.addEmployeeService.change.subscribe(isAvailable => {
      this.userAvailable = isAvailable;
      console.log(this.userAvailable);
      this.changeDetection.detectChanges();
    });
  }

}
