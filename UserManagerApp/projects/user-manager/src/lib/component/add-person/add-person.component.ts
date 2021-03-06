import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../../model/person';

@Component({
  selector: 'lib-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss']
})

export class AddPersonComponent implements OnInit {
  @Output() submited: EventEmitter<Person> = new EventEmitter<Person>();
  @Output() canceled: EventEmitter<any> = new EventEmitter();
  person: Person = new Person(null, '', '');

  constructor() { }

  ngOnInit(): void {
  }

  addPerson(): void{
    this.submited.emit(this.person);
 }

 cancel(): void{
    this.canceled.emit();
 }
}
