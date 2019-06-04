import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.sass']
})
export class AddCompanyComponent implements OnInit {

  companyField = ['IT Industry', 'Accounting', 'C', 'D'];
  cmpnyDetails:FormGroup;
  constructor(private fb: FormBuilder) { 
    this.cmpnyDetails = this.fb.group({
      companyName: new FormControl(''),
      companyMobile: new FormControl(''),
      companyAddr: new FormControl('')
    })
  }

  ngOnInit() {
  }

  sendDetails(cmpnyDetails) {
    console.log(cmpnyDetails.value)
  }


}
