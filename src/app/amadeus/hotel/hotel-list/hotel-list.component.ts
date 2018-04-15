import { Component, OnInit } from '@angular/core';
import * as fromAmadeus from '../../amadeus.reducers';
import * as fromHotelList from './hotel-list.reducer';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {
  constructor(private store: Store<fromHotelList.State>) {
    // this.store
    //   .pipe(select(fromHotelList.getHotels))
    //   .subscribe(hotels => console.log('hotels', hotels));
  }

  ngOnInit() {}
}
