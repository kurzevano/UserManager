
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
  persons: any  = []; 
  isEditMode = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    let res = this.apiService.getPersonsObject();
    res.subscribe( data => {
      this.persons = data;
      console.log(data);
    });
  }
  
  deletePerson(person: Person): void {
    this.apiService.deletePerson(person.id)
      .subscribe( data => {
        this.persons = this.persons.filter((p: Person) => p !== person);
      });
  }

  editPerson(person: Person): void {
    this.isEditMode = true;
  }
}