import { Component, OnInit, Input, Output} from '@angular/core';
import {Round} from '../model/round.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {RoundsService} from './rounds.service';
import {CookieService} from 'ngx-cookie-service';
@Component({
  selector: 'app-rounds',
  templateUrl: './rounds.component.html',

})
export class RoundsComponent implements OnInit {
  roundNumber: number;
  //Array of Rounds
  rounds: Round[]=[];
  scores=[0,1,2,3,4,5,6,7,8,9,10,11,12,13];
  suit=["No Trump","Hearts","Spades","Clubes","Diamonds"];
  proceed:boolean;
  round:Round;
  scr :number;
  selected: string;
  roundForm : FormGroup;
  nextbutton:string;
  final:boolean;
  private cookieValue :string;

  constructor(private roundservice : RoundsService,private cookieService: CookieService) {
    this.round={partnername:'',trump: this.suit[0], score: this.scores[0]};
  }

  ngOnInit() {
    this.roundNumber = 1;
    this.proceed=false;
    this.roundForm = new FormGroup({
      'name': new FormControl(this.round.partnername,[
        Validators.required,
        Validators.minLength(2)
      ]),
      'score' : new FormControl(this.round.score),
      'trump' : new FormControl(this.round.trump)
    });
    this.nextbutton="Next";
    this.final=true;
    this.cookieService.set('cookie-name',JSON.stringify(this.rounds));
    //this.cookieValue =this.cookieService.get('cookie-name');
  }
  get name() { return this.roundForm.get('name'); }

  Forward(): void {
    if(this.roundNumber>2){
      console.log("in true---------------------------");
      this.roundservice.PostRounds(this.rounds);
    }
    this.proceed=false;
    this.round.partnername=this.roundForm.get('name').value;
    this.round.trump=this.roundForm.get('trump').value;
    this.round.score=this.roundForm.get('score').value;
    console.log(this.round.partnername+"  "+this.round.score+"  "+this.round.trump);
    console.log(this.roundNumber+" rn");
    this.rounds[this.roundNumber-1] = this.round;
    console.log(this.rounds[this.roundNumber-1].partnername+" name from array");
    this.cookieService.set('cookie-name',JSON.stringify(this.rounds));
    console.log("cookies are"+JSON.stringify(this.cookieService.get('cookie-name')));
    if (this.roundNumber < 10) {
      console.log(this.rounds.length+" array size 1st");
      if(this.rounds.length>this.roundNumber){
        //set the already saved values once again
        console.log("in if "+this.round.partnername);
        this.roundForm.controls['name'].setValue(this.rounds[this.roundNumber].partnername);
        this.roundForm.controls['trump'].setValue(this.rounds[this.roundNumber].trump);
        this.roundForm.controls['score'].setValue(this.rounds[this.roundNumber].score);


      }
      else{
        this.roundForm.controls['name'].reset();
      }
      this.roundNumber += 1;
      this.round ={partnername:'',trump: this.suit[0], score: this.scores[0]};
    }
    //change last button text when on last round
      if (this.roundNumber == 10){
        this.nextbutton="End Game";
        this.final=true;
      }
      else{
        this.nextbutton="Next";
      }
  }

  Back(){
    console.log(this.rounds.length+" array size");
    console.log("in back rd: "+this.roundNumber);
    if (this.roundNumber >1) {
     this.roundNumber -= 1;
     this.roundForm.controls['name'].setValue(this.rounds[this.roundNumber-1].partnername);
     this.roundForm.controls['trump'].setValue(this.rounds[this.roundNumber-1].trump);
     this.roundForm.controls['score'].setValue(this.rounds[this.roundNumber-1].score);

    }
    this.proceed=true;
  }
  //to do *  when logout is pressed
  logout(){
    console.log("out");
  }


}
