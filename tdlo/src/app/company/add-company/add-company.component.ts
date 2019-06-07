import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
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
  personalForm:FormGroup;
  noMobile=false;
  noPhone=false;


  
  constructor(private fb: FormBuilder, private gs: GlobalService) { 

    this.cmpnyDetails = this.fb.group({

      companyName: new FormControl('',[Validators.required, Validators.minLength(2)]),

      comapnyCategory:new FormControl('',[Validators.required]),

      mobileNo: new FormControl('',[Validators.required, Validators.minLength(6)]),

      phoneNo: new FormControl('',[Validators.required, Validators.minLength(6)]),

      companyAddr: new FormControl('',[Validators.required, Validators.minLength(10)]),

      countryCode: new FormControl('',[Validators.required, Validators.minLength(1)]),

      stateCode :new FormControl('',[Validators.required, Validators.minLength(1)]),

      choosePhone:new FormControl('')

    })

    this.personalForm = this.fb.group({
      other: this.fb.array([])
    });

  }

  ngOnInit() {
  }

  sendDetails(cmpnyDetails) {
    console.log(cmpnyDetails.value);
    this.gs.post("api/user/addCompanyProfile", cmpnyDetails.value).subscribe(( data:Config )=>{
      console.log(data);
    });
  }

  radioChange(data) {
    console.log(data);
    if( data==0 ) {
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

  addOtherSkillFormGroup(): FormGroup {  
    return this.fb.group({  
      education: ['', Validators.required],  
    });  
  }  

  addButtonClick():any {  
    (<FormArray>this.personalForm.get('other')).push(this.addOtherSkillFormGroup());
  }

  getVal() {
    console.log(this.personalForm.value)
  }

  removeElem( data) {
    (<FormArray>this.personalForm.get('other')).removeAt(data);

  }



}
