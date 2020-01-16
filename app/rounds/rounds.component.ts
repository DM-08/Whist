import { Component, OnInit, Input, Output} from '@angular/core';
import {Round} from '../round.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rounds',
  templateUrl: './rounds.component.html',
  //styleUrls: ['./rounds.component.css']
})
export class RoundsComponent implements OnInit {
//  @Input() rd :Round;
//  @Output() onChange = new EventEmitter();
  roundNumber: number;
  rounds: string[];
  scores=[0,1,2,3,4,5,6,7,8,9,10,11,12,13];
  suit=["No Trump","Hearts","Spades","Clubes","Diamonds"];
  proceed:boolean;
  round ={name:'',trump: this.suit[0], score: this.scores[0]};
  scr :number;
  selected: string;
  roundForm : FormGroup;

  constructor() { }

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
    //this.proceed=true;
    this.proceed=false;
    if (this.roundNumber < 10) {
     //rounds[round-1]=this.partner_name;
     this.roundNumber += 1;
    }
    console.log(this.roundForm.get('name').value+"   "+
    this.roundForm.get('trump').value+"  "+
    this.roundForm.get('score').value);
    this.scr=0;
    this.scr=this.roundForm.get('score').value;
    console.log(this.scr);
  }

  Back(){
    if (this.roundNumber >1) {
     this.roundNumber -= 1;
    }
    this.proceed=true;
  }


}
