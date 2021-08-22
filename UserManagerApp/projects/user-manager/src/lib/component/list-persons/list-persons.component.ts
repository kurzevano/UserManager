
import { Component, OnInit, inject } from '@angular/core';
import {Person} from '../../model/person';
import {ApiPersonsService} from '../../service/api-persons.service';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'lib-list-persons',
  templateUrl: './list-persons.component.html',
  styleUrls: ['./list-persons.component.scss', '../../styles/shared.scss']
})

export class ListPersonsComponent implements OnInit {

  // Массив сотрудников для отображения в таблице
  persons: Person[] = [];

  // Текущий сотрудник (для которого осуществляется редактирование)
  selectedPerson!: Person;

  // Копия текущего сотрудника (для которого осуществляется редактирование), чтобы не сохранять изменнеия в случае отмены
  editablePerson!: Person;

  // Активен ли режим редактироания (когда показана форма редактирования сотрудника)
  isEditMode = false;

  /// Активен ли режим добавления (когда показана форма добавления сотрудника)
  isAddMode = false;

  // Иконки из Font Awesome
  faUser = faUser;
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;

  constructor(private apiService: ApiPersonsService) { }

  ngOnInit(): void {
    this.apiService.getPersons()
    .subscribe( data => {
      this.persons = data as Person[];
    });
  }

  deletePerson(person: Person): void {
    if (person.id && confirm(`Вы действительноохотите удалить сотрудника "${person.lastName} ${person.firstName}"?`))
    {
      this.apiService.deletePerson(person.id).subscribe( () => {
        this.persons = this.persons.filter((p: Person) => p !== person);
      });
    }
  }

  editPersonStart(person: Person): void {
    this.selectedPerson = person;
    this.editablePerson = new Person(person.id, person.firstName, person.lastName);
    this.isEditMode = true;
  }

  editPersonCompleted(person: Person): void {
     this.apiService.updatePerson(person).subscribe( data => {
       const databasePerson = data as Person;
       if (databasePerson)
        {
          this.selectedPerson.firstName = databasePerson.firstName;
          this.selectedPerson.lastName = databasePerson.lastName;
        }
      });

     this.isEditMode = false;
  }

  cancelEdit(): void {
    this.isEditMode = false;
  }

  addPersonStart(): void {
    this.isAddMode = true;
  }

  addPersonCompleted(person: Person): void {
    this.apiService.createPerson(person).subscribe( data => {
      const databasePerson = data as Person;
      if (databasePerson)
       {
         this.persons.push(databasePerson);
       }
     });

    this.isAddMode = false;
  }

  cancelAdd(): void {
    this.isAddMode = false;
  }
}
