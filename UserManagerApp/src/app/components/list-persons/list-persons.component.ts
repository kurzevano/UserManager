
import { Component, OnInit, inject } from '@angular/core';
import {Person} from "../../models/person";
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-list-persons',
  templateUrl: './list-persons.component.html',
  styleUrls: ['./list-persons.component.scss']
})

export class ListPersonsComponent implements OnInit {

  //persons: Person[] = [];
  selectedPerson!: Person;
  persons: any  = []; 
  isEditMode = false;
  isAddMode = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    let res = this.apiService.getPersonsObject();
    res.subscribe( data => {
      this.persons = data;
      console.log(data);
    });
  }
  
  deletePerson(person: Person): void {
    if(person.id)
    {this.apiService.deletePerson(person.id)
      .subscribe( data => {
        this.persons = this.persons.filter((p: Person) => p !== person);
      });
    }
  }

  editPerson(person: Person): void {
    this.selectedPerson = person;
    this.isEditMode = true;
  }

  editPersonCompleted(): void {
    this.isEditMode = false;
  }

  addPerson(): void {
    this.isAddMode = true;
  }

  addPersonCompleted(): void {
    this.isAddMode = false;
  }
}