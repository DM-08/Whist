import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Player} from '../player.model';


@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent {

/*  player : Player

  constructor(){
    this.player.name =player.name;
    this.player.surname=player.surname;
  }

  constructor(private router: Router){}
*/
  onSubmit(){
  //  console.log(this.player.name);
  //  console.log(this.player.surname);
    //this.router.navigate(['/Submit']);
    //this.router.navigate(['/Rounds']);

  //  this.router.navigate(['/Rounds']);
}

}
