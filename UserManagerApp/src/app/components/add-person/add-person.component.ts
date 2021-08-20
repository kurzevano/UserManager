import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from 'src/app/models/person';
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss']
})

export class AddPersonComponent implements OnInit {
  @Output() onSubmit = new EventEmitter();
  @Output() onCancel = new EventEmitter();
  person: Person = new Person(null, "", "");

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  addPerson(){
    this.apiService.createPerson(this.person).subscribe();
    console.log("adding ");
    this.onSubmit.emit(this.person);
 }
 
 cancel(){
    // navigate to different route or something else
    console.log("cancelling in add-person");
 }

}
