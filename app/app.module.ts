import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import { HttpModule } from '@angular/http';
import { LoginForm } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';
import { Whist } from './whist.component';
import {PlayersService} from './players.service';

import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from  './NotFound.component';
import { RoundsComponent } from './rounds/rounds.component';
import { RoundComponent } from './round/round.component';
import { PlayerInfoComponent } from './player-info/player-info.component'
import {Player} from './player.model'

import { HttpClientModule } from '@angular/common/http';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { RegisterComponent } from './register/register.component';
import {RegisterService} from './register/register.service';


const appRoutes: Routes = [
   { path: '',
     component: LoginForm },
   { path: 'Submit',
     component: Whist },
     {
       path: 'Rounds',
       component : RoundsComponent
     },
     {
       path: 'Round',
       component : RoundComponent
     },
     {
       path: 'UserInfo',
       component : PlayerInfoComponent
     },
     {
       path: 'Name',
       component : NameEditorComponent
     },
     {
       path: 'Register',
       component : RegisterComponent
     },
   //{ path: 'Inventory', component: AppInventory },
   { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginForm,
  //  Player,
    Whist,
    PageNotFoundComponent,
    RoundsComponent,
    RoundComponent,
    PlayerInfoComponent,
    NameEditorComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    //HttpModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PlayersService,RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
