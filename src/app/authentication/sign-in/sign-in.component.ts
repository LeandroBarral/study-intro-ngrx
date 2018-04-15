import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormControl,
  FormBuilder,
  FormGroup
} from '@angular/forms';

@Component({
  selector: 'app-auth-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(4)
      ]),
      password: new FormControl(null, [Validators.required])
    });
  }

  submit() {}
}
