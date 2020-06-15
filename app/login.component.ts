import { Component , OnInit, Input,NgModule} from '@angular/core';
import { Router } from '@angular/router';
import { PlayersService } from './services/players.service';
import {User} from './model/User.model'
import { HttpClientModule } from '@angular/common/http'

@Component ({
   selector: 'app-login',
   templateUrl: 'login.component.html',
   providers:[PlayersService]
})
export class LoginForm implements OnInit {
  authenticated = false;
  player : User ;
  loading = false;
  error = '';
  usr: User;

 constructor(private router: Router,private playerService: PlayersService) {
    this.player =new User("email","password","");
    this.player.email="ass";
    this.player.password="pass";
   }

  ngOnInit(){}

  onSubmit(){
    this.loading=true;
    this.usr=new User("name","password","tok");
    //otherwise check user details
    this.playerService.UserLogin(this.player).subscribe(
      data => {
              console.log("data "+JSON.stringify(data));
              this.usr =data;
              if(this.usr.password==this.player.password){
                this.authenticated = true;
                this.router.navigate(['/Rounds']);
              }
              else{
                alert("Password is incorrect!");
                this.authenticated = false;
              }
              this.loading = false;

              },
      error => {
              this.error = error;
              console.log("Err"+ this.error);
              this.loading = false;
              alert("Issue With Server Connection!");
            });
  }

  //New player go to registartion screen
  register(){
    this.router.navigate(['/Register']);
  }
}
