import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/index";

import {ApiResponse} from "../models/api.response";
import {Person} from "../models/person";

@Injectable({providedIn: 'root',})
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://my-json-server.typicode.com/kurzevano/TestJsonServerPublic/persons';

  getPersons() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getPersonsObject() : Observable<object> {
    return this.http.get<object>(this.baseUrl);
  }

  getPersonById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + id);
  }

  createPerson(person: Person): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, person);
  }

  updatePerson(person: Person): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + person.id, person);
  }

  deletePerson(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }
}