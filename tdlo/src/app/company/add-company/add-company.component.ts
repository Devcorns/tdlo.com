import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';
import { Config } from 'protractor';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.sass']
})
export class AddCompanyComponent implements OnInit {

  companyField = ['IT Industry', 'Accounting', 'C', 'D'];
  cmpnyDetails:FormGroup;
  noMobile=false;
  noPhone=false;


  
  constructor(private fb: FormBuilder, private gs: GlobalService) { 

    this.cmpnyDetails = this.fb.group({

      companyName: new FormControl('',[Validators.required,Validators.minLength(2)]),

      comapnyCategory:new FormControl('',[Validators.required]),

      mobileNo: new FormControl('',[Validators.required,Validators.minLength(6)]),

      phoneNo: new FormControl('',[Validators.required,Validators.minLength(6)]),

      companyAddr: new FormControl('',[Validators.required,Validators.minLength(10)]),

      countryCode: new FormControl('',[Validators.required,Validators.minLength(1)]),

      stateCode :new FormControl('',[Validators.required,Validators.minLength(1)]),
      
      choosePhone:new FormControl('')

    })
  }

  ngOnInit() {
  }

  sendDetails(cmpnyDetails) {
    console.log(cmpnyDetails.value);
    this.gs.post("api/user/addCompanyProfile",cmpnyDetails.value).subscribe((data:Config)=>{
      console.log(data);
    })

  }

  radioChange(data) {
    console.log(data);
    if( data==0 ){
      this.noMobile = false;
      this.noPhone = true;
    } else if (data == 1) {
      this.noMobile = true;
      this.noPhone = false;
    } else {
      this.noPhone = true;
      this.noMobile = true;
    }
  }


}
