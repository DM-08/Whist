import { Component, OnInit, Input, Output} from '@angular/core';
import {Round} from '../round.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rounds',
  templateUrl: './rounds.component.html',
  //styleUrls: ['./rounds.component.css']
})
export class RoundsComponent implements OnInit {
  //@Input() rd :Round;
  //@Output() onChange = new EventEmitter();
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


  constructor() {
    this.round={name:'',trump: this.suit[0], score: this.scores[0]};
  }

  ngOnInit() {
    this.roundNumber = 1;
    this.proceed=false;
    this.roundForm = new FormGroup({
      'name': new FormControl(this.round.name,[
        Validators.required,
        Validators.minLength(2)
      ]),
      'score' : new FormControl(this.round.score),
      'trump' : new FormControl(this.round.trump)
    });
  }
  get name() { return this.roundForm.get('name'); }

  Forward(): void {
    this.proceed=false;
    /*console.log(this.roundForm.get('name').value+"   "+
    this.roundForm.get('trump').value+"  "+
    this.roundForm.get('score').value);
    */
    //round ={name:'',trump: this.suit[0], score: this.scores[0]};
    this.round.name=this.roundForm.get('name').value;
    this.round.trump=this.roundForm.get('trump').value;
    this.round.score=this.roundForm.get('score').value;
    console.log(this.round.name+"  "+this.round.score+"  "+this.round.trump);
    console.log(this.roundNumber+" rn");
    this.rounds[this.roundNumber-1] = this.round;
    console.log(this.rounds[this.roundNumber-1].name+" name from array");

    if (this.roundNumber < 10) {
      console.log(this.rounds.length+" array size 1st");
      if(this.rounds.length>this.roundNumber){
        //set the already saved values once again
        console.log("in if "+this.round.name);
        this.roundForm.controls['name'].setValue(this.rounds[this.roundNumber].name);
        this.roundForm.controls['trump'].setValue(this.rounds[this.roundNumber].trump);
        this.roundForm.controls['score'].setValue(this.rounds[this.roundNumber].score);
      }
      else{
        this.roundForm.controls['name'].reset();
      }
      this.roundNumber += 1;
      this.round ={name:'',trump: this.suit[0], score: this.scores[0]};
    }
  }

  Back(){
    console.log(this.rounds.length+" array size");
    console.log("in back rd: "+this.roundNumber);
    if (this.roundNumber >1) {
     this.roundNumber -= 1;
     this.roundForm.controls['name'].setValue(this.rounds[this.roundNumber-1].name);
     this.roundForm.controls['trump'].setValue(this.rounds[this.roundNumber-1].trump);
     this.roundForm.controls['score'].setValue(this.rounds[this.roundNumber-1].score);

    }
    this.proceed=true;
  }


}
