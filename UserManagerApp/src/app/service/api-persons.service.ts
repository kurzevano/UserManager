import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import {Observable} from "rxjs/index";
import { catchError } from 'rxjs/operators';
import { HttpErrorHandlerService } from '../service/http-error-handler.service';

import {Person} from "../models/person";
import { error } from 'protractor';

@Injectable({providedIn: 'root',})
export class ApiPersonsService {

  baseUrl: string = 'https://my-json-server.typicode.com/kurzevano/TestJsonServerPublic/persons/';

  constructor(
    private http: HttpClient,
    private httpErrorHandler: HttpErrorHandlerService) {
    }

  getPersonsOld() : Observable<HttpResponse<Person[]>> {
    return this.http.get<Person[]>(this.baseUrl,  { observe: 'response' });
  }

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.baseUrl)
      .pipe(
        catchError(this.httpErrorHandler.handleError('Ошибка при получении списка сотрудников', []))
      );
  }

  getPersonById(id: number): Observable<object> {
    return this.http.get(this.baseUrl + id).
    pipe(
      catchError(this.httpErrorHandler.handleError('Ошибка при получении сотрудника с id = ' + id, []))
    );
  }

  createPerson(person: Person): Observable<object> {
    return this.http.post(this.baseUrl, person)
    .pipe(
      catchError(this.httpErrorHandler.handleError('Ошибка при добавлении сорудника', []))
    ); 
  }

  updatePerson(person: Person): Observable<object> {
    return this.http.put(this.baseUrl + person.id, person)
    .pipe(
      catchError(this.httpErrorHandler.handleError('Ошибка при сохранении сорудника', []))
    );
  }

  deletePerson(id: number): Observable<object> {
    return this.http.delete(this.baseUrl + id)
    .pipe(
      catchError(this.httpErrorHandler.handleError('Ошибка при удалении сорудника', []))
    );
  }
}