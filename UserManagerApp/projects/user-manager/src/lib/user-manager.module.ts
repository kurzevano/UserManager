import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import {ApiPersonsService} from '../lib/service/api-persons.service';
import { ListPersonsComponent } from '../lib/component/list-persons/list-persons.component';
import { PersonFormComponent } from '../lib/component/person-form/person-form.component';
import { AddPersonComponent } from '../lib/component/add-person/add-person.component';
import { EditPersonComponent } from '../lib/component/edit-person/edit-person.component';
import { HttpErrorHandlerService } from '../lib/service/http-error-handler.service';
import { UserManagerComponent } from './user-manager.component';

@NgModule({
  declarations: [
    UserManagerComponent,
    ListPersonsComponent,
    PersonFormComponent,
    AddPersonComponent,
    EditPersonComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({positionClass: 'toast-top-center'})
  ],
  exports: [UserManagerComponent],
  providers: [
    ApiPersonsService,
    HttpErrorHandlerService
  ]
})
export class UserManagerModule { }
