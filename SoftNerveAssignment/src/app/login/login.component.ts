import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username:string='';
  password:string='';
  message:string='';
  constructor(private router:Router){}
  authernticateUser(un:String,pwd:String){
    if(un=="ramesh" && pwd=="dummy")
    {
      console.log("Successfully logged In");
      this.message=`Successfully logged In with user ${this.username}`
      this.router.navigate(['listof-all-students'])
    }
    else{
      this.message="Invalid Credentials.Please Enter Right Credentials"
    }
  }
}
