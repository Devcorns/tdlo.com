import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})

export class LoginComponent implements OnInit {
   
  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  loginForm = new FormGroup( {

    username:new FormControl(''),
    password:new FormControl('')
  
  } );

  loginSubmit() {

    let userName  = this.loginForm.value.username;
    let encPass = this.encryptPassword(this.loginForm.value.password);
    this.authService.post("localhost:3000/api/auth/login");
    
  }

  encryptPassword( val ) {
    return btoa( val );
  }

 

}
