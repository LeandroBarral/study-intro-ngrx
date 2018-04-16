import { Component, OnInit } from '@angular/core';
import * as fromAmadeus from '../../amadeus.reducers';
import * as fromHotelList from './hotel-list.reducer';
import * as actions from '../../amadeus.actions';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {
  hotels$: Observable<any>;
  loading$: Observable<any>;

  constructor(
    private store: Store<fromHotelList.State>,
    private router: Router
  ) {
    this.hotels$ = this.store.pipe(select(fromHotelList.getHotels));
    this.loading$ = this.store.pipe(select(fromHotelList.getLoading));

    this.hotels$.subscribe(hotels => {
      if (!hotels) {
        this.clearCache();
      } else {
        this.hotels$ = Observable.of(hotels);
        console.log('[CACHE] Fetch Hotels From Cache');
      }
    });
  }

  ngOnInit() {}

  clearCache() {
    this.store.dispatch(new actions.SearchHotelAirport({}));
  }

  detail(propertyCode: string) {
    // console.log('propertyCode', propertyCode);
    this.router.navigate(['/amadeus/hotels', propertyCode]);
  }
}
