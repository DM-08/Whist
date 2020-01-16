import { Component, EventEmitter, Output ,Input, AfterViewInit,OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Round} from '../round.model';
import { HttpClient } from '@angular/common/http';
declare var $ : any;

@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
})
export class RoundComponent implements OnInit {
  @Output()  outPutToParent = new EventEmitter<Round>();
  //@Output() voted = new EventEmitter<string>();
  pname ={name:''};
  round :Round;
  selected: string;
  roundForm : FormGroup;
  //NotificationTOPArent(selected: Round){
    //this.outPutToParent.emit(selected);
  //}
  constructor( private router: Router, private http: HttpClient) {

  }
  ngOnInit(){
  /*  $(BTN_ALLOW_ID).click(function() {
      alert("Allowed Clicked");
    });*/
    //this.name="ah";

    this.roundForm = new FormGroup({
      'name': new FormControl(this.pname.name,[
        Validators.required,
        Validators.minLength(2)
      ])
    });
    $('.ui.dropdown').dropdown();
    //this.selected="0";
  }
  print(){
    console.log('touched');
  }

  /*public pickName(): void {

    this.voted.emit(this.name);
  }
  getname(): Round{
    return this.name;
    console.log("name is..."+this.round.partner_name+" "+this.round.score+
    " trump "+this.round.trump);
    return this.round;
  }*/

    get name() { return this.roundForm.get('name'); }


  /*addData (word: string): Observable<Hero> {
  return this.http.post(this.angUrl, "hello", httpOptions)
    .pipe(
      catchError(this.handleError('addHero', 'error'))
    );
}
*/
}
