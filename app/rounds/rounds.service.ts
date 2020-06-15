import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {Round} from '../model/round.model';

@Injectable()
export class RoundsService {

  private playersUrl: string;

  constructor(private http: HttpClient) {
    this.playersUrl = 'http://localhost:8080/Whist/round';

  }

  public PostRounds(rounds: Round[]){
    const  httpOptions = {
         headers: new HttpHeaders({
         'Content-Type': 'application/json',
         })};

    console.log("posting rounds with post----------------");
    this.http.post(this.playersUrl,rounds).subscribe(
    response => console.log(response),
    err => console.log(err)
  );
  }


}
