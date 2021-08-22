import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-user-manager',
  template: `
    <lib-list-persons></lib-list-persons>
  `,
  styles: [
  ]
})
export class UserManagerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
