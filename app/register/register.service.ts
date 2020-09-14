import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {Player} from '../model/player.model';

@Injectable()
export class RegisterService {

  private playersUrl: string;
  response: string="";

  constructor(private http: HttpClient) {
    this.playersUrl = 'http://localhost:8080/Whist/register';
  }

  //INVALID REPLY
  private handleError(error: HttpErrorResponse) {
    console.log("in error----------"+error)
    if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
     }
  // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  //SEND DETAILS TO SERVER
  public addUser(p:Player){
     //Http header setting
     const httpOptions = {
       headers: new HttpHeaders({
         //'Accept':'application/json',
         'Content-Type': 'application/json'
       })};
       //set response type as text although this does cause errors - look into later
       //responseType: 'text'
    // };
    return this.http.post(this.playersUrl,p ).pipe();//JSON.stringify(p)
  }
}
