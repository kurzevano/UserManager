import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss', '../../styles/shared.scss']
})
export class PersonFormComponent implements OnInit {
  @Input()  title: string = "Сотрудник";
  @Input()  person: Person = new Person();
  @Output() onSubmit = new EventEmitter();
  @Output() onCancel = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
        this.onSubmit.emit(this.person);
  }
 
 cancel(){
   this.onCancel.emit();
 }
}