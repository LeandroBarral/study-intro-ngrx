import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './authentication/sign-in/sign-in.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: 'app/authentication/authentication.module#AuthenticationModule'
  },
  {
    path: '',
    component: SignInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
