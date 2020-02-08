import { Component , OnInit, Input,NgModule} from '@angular/core';
import { Router } from '@angular/router';
import { PlayersService } from './players.service';
import {Player} from './player.model'
import { HttpClientModule } from '@angular/common/http'

@Component ({
   selector: 'app-login',
   templateUrl: 'login.component.html',
   providers:[PlayersService]
})
export class LoginForm implements OnInit {

 player : Player = {email:"",password:""};
//player = {name:"", password:""};

 //name="";
 //password="";
// player.name="";
 p : string;
 sr : string;
 players : Player[];
   /*,private playerService: PlayersService*/

 constructor(private router: Router,private playerService: PlayersService) {
    this.player.email="test email";
    this.player.password="Password";
    this.sr='{ "myString": "string"}'
   }
   ngOnInit(){
     //this.player.email="";
     //this.player.password="";
   }

   onGet(){
     this.playerService.gets()
     .subscribe(data => this.p =data);
     console.log("this this ppp on get "+this.p)
   }
  //call player service to save player details
  onSubmit(){
    console.log("on submit");
    console.log(this.player.email);
    console.log(this.player.password)
    console.log("to whist");
    var s = this.playerService.save(this.player).subscribe(
    response =>{ this.sr=response/*;console.log("s is ::: "+ this.sr)*/;},
    err => console.log(err)
    );
    console.log("sr is "+this.sr);
      //this.router.navigate(['/Submit']);
    //this.router.navigate(['/Round']);
    //this.playerService.addPlayer(this.p)
    //this.router.navigate(['/UserInfo']);
  }
  register(){
    console.log("on submit");
    this.router.navigate(['/Register']);
  }

  jget(){
    this.playerService.getj().subscribe(
    response =>{ this.players = response;console.log("s is :::"+ this.players[1].email);},
    err => console.log(err+" you have error")
  );
  }
}
