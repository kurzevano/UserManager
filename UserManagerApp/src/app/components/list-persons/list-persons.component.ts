
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

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    let res = this.apiService.getPersonsObject();
    res.subscribe( data => {
      this.persons = data;
      console.log(data);
    });
  } 
}