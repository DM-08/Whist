import { Component, OnInit } from '@angular/core';

@Component ({
   selector: 'whist-app',
   templateUrl: 'whist.component.html',
})
export   class   Whist implements OnInit {
   round : number

  ngOnInit(){
    this.round =1;

  }
}
