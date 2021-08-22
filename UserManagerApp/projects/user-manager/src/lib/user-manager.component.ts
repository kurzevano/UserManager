import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-user-manager',
  template: `
    <p>
      user-manager works!!!
    </p>
    <app-list-persons></app-list-persons>
  `,
  styles: [
  ]
})
export class UserManagerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
