import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import {Observable} from 'rxjs/index';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandlerService } from './http-error-handler.service';

import {Person} from '../model/person';
import { error } from 'protractor';

@Injectable({providedIn: 'root', })
export class ApiPersonsService {

  baseUrl = 'https://my-json-server.typicode.com/kurzevano/TestJsonServerPublic/persons/';

  constructor(
    private http: HttpClient,
    private httpErrorHandler: HttpErrorHandlerService) {
    }

  getPersonsOld(): Observable<HttpResponse<Person[]>> {
    return this.http.get<Person[]>(this.baseUrl,  { observe: 'response' });
  }

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.baseUrl)
      .pipe(
        catchError(this.httpErrorHandler.handleError('Ошибка при получении списка сотрудников', []))
      );
  }

  getPersonById(id: number): Observable<Person | null> {
    return this.http.get<Person>(this.baseUrl + id).
    pipe(
      catchError(this.httpErrorHandler.handleError('Ошибка при получении сотрудника с id = ' + id, null))
    );
  }

  createPerson(person: Person): Observable<Person | null> {
    return this.http.post<Person>(this.baseUrl, person)
    .pipe(
      catchError(this.httpErrorHandler.handleError('Ошибка при добавлении сорудника', null))
    );
  }

  updatePerson(person: Person): Observable<Person | null> {
    return this.http.put<Person>(this.baseUrl + person.id, person)
    .pipe(
      catchError(this.httpErrorHandler.handleError('Ошибка при сохранении сорудника', null))
    );
  }

  deletePerson(id: number): Observable<Person | null> {
    return this.http.delete<Person>(this.baseUrl + id)
    .pipe(
      catchError(this.httpErrorHandler.handleError('Ошибка при удалении сорудника', null))
    );
  }
}
