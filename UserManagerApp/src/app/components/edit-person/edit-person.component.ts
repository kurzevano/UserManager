import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-edit-person',
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

  editPerson(){
    this.submited.emit(this.person);
 }

 cancel(){
    this.canceled.emit();
 }
}
