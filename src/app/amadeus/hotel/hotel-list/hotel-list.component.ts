import { Component, OnInit } from '@angular/core';
import * as fromAmadeus from '../../amadeus.reducers';
import * as fromHotelList from './hotel-list.reducer';
import * as actions from '../../amadeus.actions';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {
  hotels$: Observable<any>;
  loading$: Observable<any>;

  constructor(private store: Store<fromHotelList.State>) {
    this.hotels$ = this.store.select(fromHotelList.getHotels);
    this.loading$ = this.store.select(fromHotelList.getLoading);

    this.store.dispatch(new actions.SearchHotelAirport({}));
  }

  ngOnInit() {}
}
