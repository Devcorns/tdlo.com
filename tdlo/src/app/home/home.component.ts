import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { GlobalService } from '../services/global.service';
import { createHostListener } from '@angular/compiler/src/core';
import { isArray } from 'util';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  
  companyList = [];
  companyProfileForm:FormGroup;

  constructor(private fb:FormBuilder,private gs:GlobalService) {
    
    this.companyProfileForm  =  this.fb.group({
      compnyName:['',Validators.required]
    })

   }

  ngOnInit() {
  }

  // searchCompanyProfile(val) {
  //   console.log(this.companyProfileForm.value);
  // }

   valueChange(val) {
    const currentClassObject = this;
    currentClassObject.companyList = [];
      this.gs.get("api/user/companyList",val.toUpperCase()).subscribe(function(res:any) {
        
        console.log("Gets Called", isArray(res),res.length);
        
        if(res.length) {
          
          for(let i =0;i<res.length;i++) {
            
            currentClassObject.companyList.push(res[i]);

          }
  
        }
       
         
      });
  }

  selectCompany( data, id) {

    console.log(data.target,id);
    this.gs.get("api/user/get-company-details",id).subscribe(function(res:any) {
      console.log(res)
    });
  
  }

}
