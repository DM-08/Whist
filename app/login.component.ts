import { Component , Input,NgModule} from '@angular/core';
import { Router } from '@angular/router';
import { PlayersService } from './players.service';
import {Player} from './player.model'
import { HttpClientModule } from '@angular/common/http'

@Component ({
   selector: 'app-login',
   templateUrl: 'login.component.html',
   providers:[PlayersService]
})
export class LoginForm {

 //player : Player;  //= "";
player = {name:"",
          password:""};

 //name="";
 //password="";
// player.name="";
 p : string;
 sr : string;
 players : Player[];
   /*,private playerService: PlayersService*/

 constructor( private router: Router,private playerService: PlayersService) {
   //this.player.name="";
   //this.player.password="";
   }

   onGet(){
     this.playerService.gets()
     .subscribe(data => this.p =data);
     console.log("this this ppp on get "+this.p)
   }

  onSubmit(){
    console.log(this.player.name);
    console.log(this.player.password)
    console.log("to whist");
    var s = this.playerService.save(this.player.name).subscribe(
    response =>{ this.sr = response;console.log("s is :::"+ this.sr);}, //console.log("res is " +response),
    err => console.log(err)
  );

      //this.router.navigate(['/Submit']);
    //this.router.navigate(['/Round']);
    //this.playerService.addPlayer(this.p)
    //this.router.navigate(['/UserInfo']);
  }

  jget(){
    this.playerService.getj().subscribe(
    response =>{ this.players = response;console.log("s is :::"+ this.players[1].id);},
    err => console.log(err)
  );
  }

}
