import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { BehaviorSubject,Observable, throwError } from 'rxjs';
import { User } from '../model/User.model';
import { map } from 'rxjs/operators';

@Injectable()
export class PlayersService {
  private playersUrl: string;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.playersUrl = 'http://localhost:8080/Whist/';
    //check below
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  //SAVE NEW PLAYER DETAILS
   public save(player : User) {
     const  httpOptions = {
          headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
     this.http.post(
      this.playersUrl+'details',player,httpOptions).subscribe(
        (data)=>{
          return "done";
       },
      error=>{
        this.handleError(error);
        return "empty";
      });
    }

  //let user login
   public UserLogin(player : User) {

     const  httpOptions = {
          headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
      return this.http.post<any>(this.playersUrl+'login',player)
      .pipe(map(user => {
            if (user && user.token) {
                //store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(player));
                this.currentUserSubject.next(player);
            }
                return player;
            }));
   }

   //logout
   Logout(){
     // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
   }

   public get currentUserValue(): User {
     return this.currentUserSubject.value;
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

}
