import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from 'src/app/models/person';
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.scss']
})
export class EditPersonComponent implements OnInit {
  @Input()  person: Person = new Person();
  @Output() onSubmit = new EventEmitter();
  @Output() onCancel = new EventEmitter();

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  editPerson(){
    this.apiService.updatePerson(this.person as Person);
    console.log("saving " + this.person);
    this.onSubmit.emit(this.person);
 }
 
 cancel(){
    console.log("cancelling in edit-person");
    this.onCancel.emit();
 }

}