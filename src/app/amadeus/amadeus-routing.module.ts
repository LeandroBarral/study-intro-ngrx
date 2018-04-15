import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelListComponent } from './hotel/hotel-list/hotel-list.component';
import { SecureComponent } from '../layout/secure/secure.component';
import { HotelDetailComponent } from './hotel/hotel-detail/hotel-detail.component';

const routes: Routes = [
  {
    path: '',
    component: SecureComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'hotels'
      },
      {
        path: 'amadeus',
        pathMatch: 'full',
        redirectTo: 'hotels'
      },
      {
        path: 'hotels',
        component: HotelListComponent
      },
      {
        path: 'hotels/:propertyCode',
        component: HotelDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmadeusRoutingModule {}
