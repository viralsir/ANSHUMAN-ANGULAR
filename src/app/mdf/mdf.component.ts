import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-mdf',
  templateUrl: './mdf.component.html',
  styleUrls: ['./mdf.component.css']
})
export class MdfComponent implements OnInit {

    loginformRef=new FormGroup({
      user:new FormControl("",[Validators.required,Validators.minLength(3)]),
      password:new FormControl("",[Validators.required])
    })
   msg:string=""
  constructor() { }

  ngOnInit(): void {
  }

  loginbtnclick(){
      let loginform=this.loginformRef.value;
      if(loginform.user=="admin" && loginform.password=="123")
      {
        this.msg="login Successfull";
      }
      else
      {
        this.msg="Wrong username or password";
      }
  }
}
