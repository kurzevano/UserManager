import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';

// Обрабатывает ошибки HttpClient
@Injectable({providedIn: 'root',})
export class HttpErrorHandlerService {
  constructor(private toastr: ToastrService) { }

  handleError<T>(errorMessage = '', result = {} as T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(error);

      let descriptionError  = '';

      switch(error.status) {
        case 400: {
          descriptionError+='Неверный запрос';
           break;
        }
        case 404: {
          descriptionError+='Сущность не найдена в системе';
           break;
        }
        case 500: {
          descriptionError+='Серверная ошибка';
           break;
        }
     }

      this.toastr.error(descriptionError, errorMessage);

      // Возвращаем безопасный результат для продолжения работы
      return of( result );
    };
  }
}
