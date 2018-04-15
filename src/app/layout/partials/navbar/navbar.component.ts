import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromLayout from '../../layout.reducers';
import * as layoutActions from '../../layout.actions';

@Component({
  selector: 'app-layout-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private store: Store<fromLayout.LayoutState>) {}

  ngOnInit() {}

  toggleSidemenu() {
    this.store.dispatch(new layoutActions.ToggleSideMenu());
  }
}
