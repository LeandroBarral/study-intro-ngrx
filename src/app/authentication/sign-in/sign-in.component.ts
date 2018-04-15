import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormControl,
  FormBuilder,
  FormGroup
} from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromSignIn from './sign-in.reducer';
import * as fromAuth from '../authentication.reducers';
import * as actions from '../authentication.actions';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  form: FormGroup;
  loading$: Observable<boolean>;
  errorMessage$: Observable<string>;

  constructor(
    private store: Store<fromSignIn.SignInState>,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loading$ = this.store.pipe(select(fromSignIn.getLoading));
    this.errorMessage$ = this.store.pipe(select(fromSignIn.getErrorMessage));

    this.store
      .pipe(select(fromAuth.getUserIsAuthenticated))
      .subscribe(isAuthenticated => {
        if (isAuthenticated) {
          this.router.navigate(['/']);
        }
      });
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(4)
      ]),
      password: new FormControl(null, [Validators.required])
    });

    this.mockDev();
  }

  mockDev() {
    if (!environment.production) {
      console.group(':: MOCKING :: user/pass');
      this.form.patchValue({
        username: 'test',
        password: 'test'
      });
      console.log('this.form.value', this.form.value);
      console.groupEnd();
    }
  }

  submit() {
    // console.log('submit() :: this.form.value', this.form.value);
    this.store.dispatch(new actions.Authenticate(this.form.value));
  }
}
