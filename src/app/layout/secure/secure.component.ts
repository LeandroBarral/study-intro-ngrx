import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromLayout from '../layout.reducers';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-layout-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss']
})
export class SecureComponent implements OnInit {
  isSidemenuOpen$: Observable<boolean>;

  constructor(private store: Store<fromLayout.LayoutState>) {
    this.isSidemenuOpen$ = this.store.pipe(
      select(fromLayout.getIsSidemenuOpen)
    );
  }

  ngOnInit() {
    const htmlTag = document.getElementsByTagName('html')[0];
    htmlTag.classList.add('has-navbar-fixed-top');
  }
}
