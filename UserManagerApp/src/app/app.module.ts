import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {ApiService} from "./service/api.service";
import { AppComponent } from './app.component';
import { ListPersonsComponent } from './components/list-persons/list-persons.component';
import { PersonFormComponent as PersonFormComponent } from './components/person-form/person-form.component';
import { AddPersonComponent } from './components/add-person/add-person.component';
import { EditPersonComponent } from './components/edit-person/edit-person.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPersonsComponent,
    PersonFormComponent,
    AddPersonComponent,
    EditPersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
