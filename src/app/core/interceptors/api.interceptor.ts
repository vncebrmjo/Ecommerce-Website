import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';


// HTTP interceptor for adding global headers and error handling

export const ApiInterceptor: HttpInterceptorFn = (req, next) => {
  // Clone request and add common headers
  const modifiedReq = req.clone({
    withCredentials: true // Enable credentials for CORS
  });

  return next(modifiedReq).pipe(
    catchError((error: HttpErrorResponse) => {
      // Global error logging
      if (environment.enableLogging) {
        console.error('HTTP Error:', {
          status: error.status,
          message: error.message,
          url: error.url
        });
      }

      return throwError(() => error);
    })
  );
};