import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-tdf',
  templateUrl: './login-tdf.component.html',
  styleUrls: ['./login-tdf.component.css']
})
export class LoginTdfComponent implements OnInit {

  ph: String= "Enter Email pls:..";


  constructor() { }

  ngOnInit(): void {

  console.log("1");

  }

  // login(loginForm: NgForm){
  //   console.log(loginForm.value,loginForm.valid);
  // }

  login(loginForm: NgForm){
    console.log(loginForm.value,loginForm.valid);
  }



}
