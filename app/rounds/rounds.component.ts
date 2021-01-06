import { Component, OnInit, Input, Output} from '@angular/core';
import {Round} from '../model/round.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {RoundsService} from './rounds.service';
import {CookieService} from 'ngx-cookie-service';
declare var $ : any;
//import * as $ from 'jquery';
@Component({
  selector: 'app-rounds',
  templateUrl: './rounds.component.html',
  styleUrls: ['./rounds.component.css']
})
export class RoundsComponent implements OnInit {
  roundNumber: number= 1;
  //Array of Rounds
  rounds: Round[]=[];
  scores=[0,1,2,3,4,5,6,7,8,9,10,11,12,13];
  suit=["No Trump","Hearts","Spades","Clubes","Diamonds"];
  proceed:boolean;
  partnername: string;
  round:Round;
  scr :number;
  selected: string;
  roundForm : FormGroup;
  nextbutton:string;
  final:boolean;
  private cookieValue :string;
  public check: number = 0;


  constructor(private roundservice : RoundsService,private cookieService: CookieService) {
    this.Init_Round();
    console.log("ROUND CONSTRUCTOR---------------------------");
    //jquery
  }




  //Initialise the round
  Init_Round(){
    this.round={partnername:'',trump: this.suit[0], score: this.scores[0]};
  }

 //remove this altogether maybe
  ngOnInit() {

    //jquery
    $(document).ready(function() {
      $('.ui.dropdown').dropdown();

    });
    $('#ione').click(function () {
      $('#dropdownMenu').toggleClass('one');
    });
    $('#itwo').click(function () {
      $('#dropdownMenu').toggleClass('two');
    });



    //set round number - //set in session storage //initialised above
    this.nextbutton="Next";
    //setup the form
    this.SetupForm();

    //either no existing data in local storage or there is
    //check local storage - see data already present
    this.CheckLocal();

    //else no data present intitialise
    //CHECKLOCAL will return 0 if no data present so check this
    var check = localStorage.getItem('round['+this.roundNumber+']');
    if (check === null) {
      // init round
      this.Init_Round();
      //no data so not allowed proceed
      this.proceed=false;
    }
    else{
      //data exists so user can proceed
      this.Proceed();
      //load data
    }
    //console.log(JSON.stringify(localStorage.getItem('round[1]')+" ROUND array---------------------------"));
    console.log(this.check+" ROUND INIT---------------------------");


    this.final=true;
    //this.cookieService.set('cookie-name',JSON.stringify(this.rounds));
    //this.CheckLocal();
    //this.LoadRound();
    console.log('init done');

  }

  //CHECK LOCAL STORAGE TO SEE IF DATA ALREADY EXISTS FOR CURRENT ROUND
  CheckLocal(){
    var check = localStorage.getItem('round['+this.roundNumber+']');
    console.log(this.roundNumber+' check is '+check);

    console.log(check);
    if(check !== 'null'&&check !=='undefined'){
      console.log('accurate');
        this.round = JSON.parse(localStorage.getItem('round['+this.roundNumber+']'));
        this.roundForm.controls['name'].setValue(this.round.partnername);
        this.roundForm.controls['trump'].setValue(this.round.trump);
        this.roundForm.controls['score'].setValue(this.round.score);
    }else{
      console.log('inaccurate');
      this.Init_Round();
      this.SetupForm();
    }

  }

  //set proceed to true - remove this?
  Proceed(){
    this.proceed=true;
  }

  get name() { return this.roundForm.get('name'); }

  //initial form setup
  SetupForm(){
    console.log ('setup form');
    this.roundForm = new FormGroup({
      'name': new FormControl(this.round.partnername,[
        Validators.required,
        Validators.minLength(2)
      ]),
      'score' : new FormControl(this.round.score),
      'trump' : new FormControl(this.round.trump)
    });
  }

  Forward(): void {
    //details posted each round - to be updated to only post at the end of the game
    if(this.roundNumber>2){
      console.log("posting round details-------------------------");
      //this.roundservice.PostRounds(this.rounds);
    }
    //save current round details to local storage before moving on
    this.round.partnername=this.roundForm.get('name').value;
    this.round.trump=this.roundForm.get('trump').value;
    this.round.score=this.roundForm.get('score').value;
    localStorage.setItem('round['+this.roundNumber+']',JSON.stringify(this.round));

    //loads current details
    //if (this.roundNumber < 10) {
      console.log(this.rounds.length+" array size 1st");
      //if(this.rounds.length>this.roundNumber){
        //set the already saved values once again
      //  console.log("in if "+this.round.partnername);

      //}
      //else{
        //this.roundForm.controls['name'].reset();
      //}

      //this.round ={partnername:'',trump: this.suit[0], score: this.scores[0]};
    //}*/
   //--------------------------------------------------
    //this.cookieService.set('cookie-name',JSON.stringify(this.rounds));

    //reset to check
    //this.round = 0;
    //if final round
    if(this.roundNumber===10){

    }

    //increment the current round number
    this.roundNumber += 1;
    //check if data or 0
    this.CheckLocal();

    // no data present intitialise  -- CHANGE MADE HERE TO &&
    if (!this.round){//===NULL||this.round === 'undefined') {
      console.log('no data');
      // do the rest
      this.Init_Round();
      this.proceed=false;
    }
    else{
      this.Proceed();
      this.LoadRound();
    }

    //change last button text when on last round
      if (this.roundNumber === 10){
        this.nextbutton="End Game";
        this.final=true;
      }
      else{
        this.nextbutton="Next";
      }
  }

  Back(){
    //debug - printing details to check
    console.log(this.rounds.length+" array size");
    console.log("in back rd: "+this.roundNumber);

    if (this.roundNumber >1) {
     this.roundNumber -= 1;
     this.nextbutton="Next";
     this.final=false;
     /*this.roundForm.controls['name'].setValue(this.rounds[this.roundNumber-1].partnername);
     this.roundForm.controls['trump'].setValue(this.rounds[this.roundNumber-1].trump);
     this.roundForm.controls['score'].setValue(this.rounds[this.roundNumber-1].score);*/
     this.LoadRound();

    }
    this.proceed=true;
  }

  //Load round details if in cookies already
  LoadRound(){
    //if(this.rounds.length>0){
      this.CheckLocal();
      /*this.round = JSON.parse(localStorage.getItem('round['+this.roundNumber+']'));
      if(this.round!=null){
        console.log("round not null "+JSON.stringify(this.round));
        this.roundForm.controls['name'].setValue(this.round.partnername);
        this.roundForm.controls['trump'].setValue(this.round.trump);
        this.roundForm.controls['score'].setValue(this.round.score);
      }else{
        console.log("round null");
        this.roundForm.controls['name'].setValue(this.rounds[this.roundNumber-1].partnername);
        this.roundForm.controls['trump'].setValue(this.rounds[this.roundNumber-1].trump);
        this.roundForm.controls['score'].setValue(this.rounds[this.roundNumber-1].score);
      }*/

  }


  //to do *  when logout is pressed
  logout(){
    console.log("out");
  }


}
