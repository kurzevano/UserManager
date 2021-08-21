import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-add-person',
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

  addPerson(){
    this.submited.emit(this.person);
 }

 cancel(){
    this.canceled.emit();
 }
}
