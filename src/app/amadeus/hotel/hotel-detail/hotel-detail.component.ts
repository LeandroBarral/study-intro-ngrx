import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as fromAmadeus from '../../amadeus.reducers';
import * as fromHotelDetail from './hotel-detail.reducer';
import * as actions from '../../amadeus.actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.scss']
})
export class HotelDetailComponent implements OnInit {
  error: string;
  loading$: Observable<boolean>;
  hotel$: Observable<any>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromAmadeus.State>
  ) {
    this.loading$ = this.store.pipe(select(fromHotelDetail.getLoading));
    this.hotel$ = this.store.pipe(select(fromHotelDetail.getHotel));

    this.route.params.subscribe(params => {
      if (params && params['propertyCode']) {
        const propertyCode = params['propertyCode'];
        this.error = null;

        this.store.dispatch(
          new actions.GetHotel({
            propertyCode: propertyCode
          })
        );
      }
    });
  }

  ngOnInit() {}

  back() {
    this.router.navigate(['/amadeus/hotels']);
  }
}
