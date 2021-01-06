import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import { HttpModule } from '@angular/http';
import { LoginForm } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';
import { Whist } from './whist.component';
import {PlayersService} from './services/players.service';

import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from  './NotFound.component';
import { RoundsComponent } from './rounds/rounds.component';
import { RoundComponent } from './round/round.component';
import {User} from './model/User.model'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//import { NameEditorComponent } from './name-editor/name-editor.component';
import { RegisterComponent } from './register/register.component';
import {RegisterService} from './register/register.service';
import {RoundsService} from './rounds/rounds.service';
import { DiceComponent } from './dice/dice.component';
import {CookieService} from 'ngx-cookie-service';
import { appRoutingModule } from './app.routing';

//import Auth Guard
import {AuthGuard} from './services/auth.guard';
import { JwtInterceptor} from './helpers/jwt.interceptor';
import {ErrorInterceptor } from './helpers/error.interceptor';
import { EndGameComponent } from './end-game/end-game.component';
/*
const appRoutes: Routes = [
   { path: '',
     component: LoginForm },
   { path: 'Submit',
     component: Whist },
     {
       path: 'Rounds',
       component : RoundsComponent,
       canActivate: [AuthGuard]
     },
     {
       path: 'Round',
       component : RoundComponent
     },
     {
       path: 'Name',
       component : NameEditorComponent
     },
     {
       path: 'Register',
       component : RegisterComponent
     },
     {
       path: 'Dice',
       component : DiceComponent
     },

   //{ path: 'Inventory', component: AppInventory },
   { path: '**', component: PageNotFoundComponent }
];
export const appRoutingModule = RouterModule.forRoot(routes);
*/
declare var $: any;
console.log(`jQuery version: ${$.fn.jquery}`);

@NgModule({
  declarations: [
    AppComponent,
    LoginForm,
  //  Player,
    Whist,
    PageNotFoundComponent,
    RoundsComponent,
    RoundComponent,
    //NameEditorComponent,
    RegisterComponent,
    //appRoutingModule,
    DiceComponent,
    EndGameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //RouterModule.forRoot(appRoutes)
    appRoutingModule
  ],
  //NEW PROVIDERS ADDED , NEED TO BE CHECKED
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  PlayersService,RegisterService,RoundsService,CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

//ng build --prod --aot
