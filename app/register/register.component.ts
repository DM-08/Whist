import { Component, OnInit } from '@angular/core';
import {RegisterDetails} from '../register.model';
import { Router } from '@angular/router';
import{RegisterService} from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  providers:[RegisterService]
})
export class RegisterComponent implements OnInit {

  user ={name:"",surname:"",email_address:"",password:""};
  sr :string;
  constructor(private router: Router,private registerService:RegisterService) {
    this.sr='{ "myString": "string"}'
  }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['/']);
  }

  RegisterUser(){
    //this.register.addUser().subscribe(data => this.p =data);
    var s = this.registerService.addUser().subscribe(
    response =>{ this.sr=response;console.log("s is ::: "+ this.sr);},
    err => console.log(err)
   );
    console.log("pa  "+this.sr);
    //console.log("pa  "+this.player);
    //console.log("pa  "+this.player);
  }
}
