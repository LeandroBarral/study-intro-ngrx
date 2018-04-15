import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss']
})
export class SecureComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const htmlTag = document.getElementsByTagName('html')[0];
    htmlTag.classList.add('has-navbar-fixed-top');
  }
}
