import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { User } from './model/User.model';

import { PlayersService } from './services/players.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  currentUser: User;
    constructor(
        private router: Router,
        private authenticationService: PlayersService) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }
    /*
    get isAdmin() {
        return this.currentUser && this.currentUser.role === Role.Admin;
    }*/

    logout() {
        this.authenticationService.Logout();
        console.log("this router navigate");
        this.router.navigate(['']);
    }
}
