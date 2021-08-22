import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../../model/person';

@Component({
  selector: 'lib-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.scss']
})
export class EditPersonComponent implements OnInit {
  @Input()  person: Person = new Person();
  @Output() submited = new EventEmitter();
  @Output() canceled = new EventEmitter();

  constructor() {
   }

  ngOnInit(): void {
  }

  editPerson(): void{
    this.submited.emit(this.person);
 }

 cancel(): void{
    this.canceled.emit();
 }
}
