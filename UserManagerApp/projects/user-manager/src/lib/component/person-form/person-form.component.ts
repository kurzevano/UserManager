import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../../model/person';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss', '../../styles/shared.scss']
})
export class PersonFormComponent implements OnInit {
  @Input()  caption = 'Сотрудник';
  @Input()  person: Person = new Person();
  @Output() submited = new EventEmitter();
  @Output() canceled = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    this.submited.emit(this.person);
  }

  cancel(){
    this.canceled.emit();
 }
}
