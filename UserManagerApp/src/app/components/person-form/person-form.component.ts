import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from 'src/app/models/person';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit {
  @Input()  title: string = "Сотрудник";
  @Input()  person: Person = new Person();
  @Output() onSubmit = new EventEmitter();
  @Output() onCancel = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  submit(e : Event){
        console.log("onSubmit person-form");
        //e.stopPropagation() ;
        this.onSubmit.emit(this.person);
  }
 
 cancel(){
  console.log("onCancel person-form");
   this.onCancel.emit();
 }
}