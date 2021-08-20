import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/index";

import {Person} from "../models/person";

@Injectable({providedIn: 'root',})
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://my-json-server.typicode.com/kurzevano/TestJsonServerPublic/persons';

  // getPersons() : Observable<ApiResponse> {
  //   return this.http.get<ApiResponse>(this.baseUrl);
  // }

  getPersonsObject() : Observable<object> {
    return this.http.get<object>(this.baseUrl);
  }

  getPersonById(id: number): Observable<object> {
    return this.http.get(this.baseUrl + id);
  }

  createPerson(person: Person): Observable<object> {
    console.log("api add person");
    return this.http.post(this.baseUrl, person); 
  }

  updatePerson(person: Person): Observable<object> {
    console.log("api edit person");
    return this.http.put(this.baseUrl + person.id, person);
  }

  deletePerson(id: number): Observable<object> {
    console.log("api delete person");
    return this.http.delete(this.baseUrl+"/" + id);
  }
}