import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import {ApiPersonsService} from './service/api-persons.service';
import { AppComponent } from './app.component';
import { ListPersonsComponent } from './components/list-persons/list-persons.component';
import { PersonFormComponent as PersonFormComponent } from './components/person-form/person-form.component';
import { AddPersonComponent } from './components/add-person/add-person.component';
import { EditPersonComponent } from './components/edit-person/edit-person.component';
import { HttpErrorHandlerService } from './service/http-error-handler.service';
import { UserManagerModule } from 'user-manager';

@NgModule({
  declarations: [
    AppComponent,
    ListPersonsComponent,
    PersonFormComponent,
    AddPersonComponent,
    EditPersonComponent
  ],
  imports: [
    UserManagerModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({positionClass: 'toast-top-center'})
  ],
  providers: [
    ApiPersonsService,
    HttpErrorHandlerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
