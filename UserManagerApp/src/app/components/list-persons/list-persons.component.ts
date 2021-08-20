
import { Component, OnInit, inject } from '@angular/core';
import {Person} from "../../models/person";
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-list-persons',
  templateUrl: './list-persons.component.html',
  styleUrls: ['./list-persons.component.scss', '../../styles/shared.scss']
})

export class ListPersonsComponent implements OnInit {

  // Массив сотрудников для отображения в таблице
  persons: Person[] = [];

  // Текущий сотрудник (для которого осуществляется редактирование)
  selectedPerson!: Person;

  // Активен ли режим редактироания (когда показана форма редактирования сотрудника)
  isEditMode = false;

  /// Активен ли режим добавления (когда показана форма добавления сотрудника)
  isAddMode = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    let res = this.apiService.getPersonsObject();
    res.subscribe( data => {
      this.persons = data as Person[];
      console.log(data);
    });
  }
  
  deletePerson(person: Person): void {
    if(person.id)
    {this.apiService.deletePerson(person.id)
      .subscribe( () => {
        this.persons = this.persons.filter((p: Person) => p !== person);
      });
    }
  }

  editPersonStart(person: Person): void {
    this.selectedPerson = person;
    this.isEditMode = true;
  }

  editPersonCompleted(person:Person): void {
    this.apiService.updatePerson(person).subscribe();
    this.isEditMode = false;
  }

  cancelEdit(): void {
    this.isEditMode = false;
  }

  addPersonStart(): void {
    this.isAddMode = true;
  }

  addPersonCompleted(person: Person): void {
    this.apiService.createPerson(person).subscribe(()=>{
      (this.persons).push(person);
    });
    this.isAddMode = false;
  }

  cancelAdd(): void {
    this.isAddMode = false;
  }
}