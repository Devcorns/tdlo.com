import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  profileForm:FormGroup;

  constructor(private fb:FormBuilder,private gs:GlobalService) {

    this.profileForm  =  this.fb.group({
      fullname : ['',Validators.required],
      mobileno : ['',Validators.required],
      fullcompanyname : ['',Validators.required],
      fullcompanyaddr : ['',Validators.required],
      place : ['',Validators.required],
      aslt:[0,Validators.required]
    })

   }

  ngOnInit() {
  }

  submitProfile() {
    //console.log(this.profileForm.value);
    this.gs.get("api/user/baseinfo",this.profileForm.value).subscribe((data:any)=>{
      console.log(data);
    })
  }

}
