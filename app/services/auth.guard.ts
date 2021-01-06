//will check if user is authorised to proceed
//not logged in what areas can they access.
import { Injectable } from '@angular/core';
import { Router, CanActivate,
  ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

//need to import service also
import { PlayersService } from './players.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private playerService: PlayersService) {

     }

     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const currentUser = this.playerService.currentUserValue;
       if (currentUser) {
           // logged in so return true
           return true;
       }

       // not logged in so redirect to login page with the return url
       this.router.navigate(['']);
       /*, { queryParams: { returnUrl: state.url } });*/
       return false;
 }
}
