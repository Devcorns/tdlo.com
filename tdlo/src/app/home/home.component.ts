import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  companyProfileForm:FormGroup;

  constructor(private fb:FormBuilder,private gs:GlobalService) {

    this.companyProfileForm  =  this.fb.group({
      // fullname : ['',Validators.required],
      // mobileno : ['',Validators.required],
      // fullcompanyname : ['',Validators.required],
      // fullcompanyaddr : ['',Validators.required],
      // place : ['',Validators.required],
      // aslt:[0,Validators.required]
      compnyName:['',Validators.required]
    })

   }

  ngOnInit() {
  }

  searchCompanyProfile(val) {
    console.log(this.companyProfileForm.value);
    this.gs.get("api/user/companyList",val);
  }

  async valueChange(val) {

    console.log(val);
    await this.gs.get("api/user/companyList",val);

  }

}
