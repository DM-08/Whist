import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{RegisterService} from './register.service';
import {Player} from '../model/player.model';
import * as $ from 'jquery';
declare var $:any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  providers:[RegisterService]
})
export class RegisterComponent implements OnInit {
   play: Player;
   loading:boolean;
   error: string;
  constructor(private router: Router,private registerService:RegisterService) {
    this.play =new Player();
    this.play.fname="Carl";
    this.play.sname="kop";
    this.play.email="ass";
    this.play.password="pass";
    this.loading=false;
    this.error="";
  }

  ngOnInit() {

  }
  close(){
    console.log("close");
    //$(errmss).hide();
    document.getElementById('errmss').classList.add('hidden');
  }

  back(){
    this.router.navigate(['/']);
  }

  RegisterUser(){
    this.loading=true;
    document.getElementById('form').classList.add('loading');
    document.getElementById('errmss').classList.add('hidden');
    this.registerService.addUser(this.play).subscribe(

    data=>{
      //this.res=JSON.stringify(data);
      this.loading=false;
      console.log(data+"-- res response");
      document.getElementById('form').classList.remove('loading');
    },
    err =>{
      console.log(err.error);
      document.getElementById('form').classList.remove('loading');
      document.getElementById('errmss').classList.remove('hidden');
      console.log('aaa');
      //alert(err.error.text);
      console.log('aaa'+ err);
      this.error= err.error;
      console.log('bbb'+ this.error);
    });
  }

}
