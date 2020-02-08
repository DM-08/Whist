import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Player } from './player.model';

@Injectable()
export class PlayersService {

  private playersUrl: string;

  constructor(private http: HttpClient) {
    this.playersUrl = 'http://localhost:8080/Hello/';
    //'http://localhost:8084/Whist/players';
  }

//-----------------------------------------------------------
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
//--------------------------------------------------------------------

   public save(player : Player): Observable<string> {

     const  httpOptions = {
          headers: new HttpHeaders({
          'Content-Type': 'application/text'
        })
      };


      //this.http.post("someurl/addData",event.newData,{ headers: headers
     //}).subscribe(response => { console.log(response);})
    //httpOptions.headers = { headers: headers}
    //httpOptions.headers.set('Authorization', 'my-new-auth');
    console.log("in save");
    console.log(player.email+"   +  "+player.password);
    return this.http.post<string>(
      this.playersUrl+'details',
      player,httpOptions)
      .pipe(catchError(this.handleError));
  }
  
  public gets(): Observable<string>{
  /*  const  httpOptions = {
         headers: new HttpHeaders({
         'Content-Type': 'application/json',
         'Access-Control-Allow-Origin' : '*',
         'Access-Control-Allow-Methods' : 'GET, POST, PUT, DELETE'
         })
     };*/
     const requestOptions: Object = {
    /* other options here */
    responseType: 'text'
  };

    return this.http.get<string>(this.playersUrl+'details',requestOptions);

  }
  public getj(): Observable<Player[]>{
    const  httpOptions = {
         headers: new HttpHeaders({
         'Content-Type': 'application/json',
         'Access-Control-Allow-Origin' : '*',
         'Access-Control-Allow-Methods' : 'GET, POST, PUT, DELETE'
         })
     };
     /*const requestOptions: Object = {
    /* other options here */
     //responseType: 'text'

    return this.http.get<Player[]>(this.playersUrl+'testjjj',httpOptions);

  }



/*


   return this.http.post<Category>(this.apiURL+'api',
    JSON.stringify({"type":"get_categories"}), httpOptions )
    .pipe(
      retry(0),
      //catchError(this.handleError)
    )
  }
  */

}
