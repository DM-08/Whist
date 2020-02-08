import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class RegisterService {

  private playersUrl: string;

  constructor(private http: HttpClient) {
    this.playersUrl = 'http://localhost:8080/Hello/';
  }

  //INVALID REPLY
  private handleError(error: HttpErrorResponse) {
    console.log("in error----------")
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
  public addUser(): Observable<string>{
    const  httpOptions = {
         headers: new HttpHeaders({
         'Content-Type': 'application/json'
       })
     };

    console.log("adding user in register service")

    return this.http.post<string>(
      this.playersUrl+'addUser',
      "player",httpOptions)
      .pipe(catchError(this.handleError));
  }
  //------------------------------------------------
  //VALID REPLY

}
