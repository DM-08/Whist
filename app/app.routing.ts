import { RoundsComponent } from './rounds/rounds.component';
import { RoundComponent } from './round/round.component';
//import { NameEditorComponent } from './name-editor/name-editor.component';
import { RegisterComponent } from './register/register.component';
import { LoginForm } from './login.component';
import { Whist } from './whist.component';

import { Routes, RouterModule } from '@angular/router';
//import Auth Guard
import {AuthGuard} from './services/auth.guard';
//import { JwtInterceptor, ErrorInterceptor } from './helpers';

const routes: Routes = [
   {
     path: '',
     component: LoginForm

    },
   {
     path: 'Submit',
     component: Whist,
     canActivate: [AuthGuard]
    },
     {
       path: 'Rounds',
       component : RoundsComponent,
       canActivate: [AuthGuard]
     },
     {
       path: 'Round',
       component : RoundComponent
     },
     /*{
       path: 'Name',
       component : NameEditorComponent
     },*/
     {
       path: 'Register',
       component : RegisterComponent
     }/*,
   { path: '**', component: PageNotFoundComponent }*/
];
export const appRoutingModule = RouterModule.forRoot(routes);
