import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { HotelListComponent } from './amadeus/hotel/hotel-list/hotel-list.component';
import { SecureComponent } from './layout/secure/secure.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/amadeus/hotels'
  },
  {
    path: 'auth',
    loadChildren: './authentication/authentication.module#AuthenticationModule'
  },
  {
    path: 'amadeus',
    loadChildren: './amadeus/amadeus.module#AmadeusModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
