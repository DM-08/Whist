import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {
  dice : number
  constructor(private router: Router) { }

  ngOnInit() {
    this.dice=1;
  }

  Roll(){
    this.dice=Math.floor(Math.random() * 6) + 1 ;
  }

}
