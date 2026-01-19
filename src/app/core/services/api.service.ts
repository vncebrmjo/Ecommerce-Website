// src/app/core/services/api.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, timeout, catchError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { TestConnectionModel } from '../models/test-connection.model';

/**
 * Base API service for all HTTP communications
 * Provides centralized configuration and error handling
 */
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.apiUrl;
  private readonly requestTimeout = environment.apiTimeout;

  /**
   * Performs a health check against the backend API
   * @returns Observable of health check response
   */
  
  checkHealth(): Observable<TestConnectionModel> {
    return this.http.get<TestConnectionModel>(`${this.baseUrl}/testconnection`).pipe(
      timeout(this.requestTimeout),
      catchError(this.handleError)
    );
  }

  /**
   * Centralized error handling for HTTP requests
   * @param error - HTTP error response
   * @returns Observable that emits an error
   */

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred';

    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      errorMessage = `Network error: ${error.error.message}`;
    } else {
      // Backend returned an unsuccessful response code
      errorMessage = `Server error: ${error.status} - ${error.message}`;
      
      if (error.status === 0) {
        errorMessage = 'Unable to connect to server. Please check if the backend is running.';
      }
    }

    if (environment.enableLogging) {
      console.error('API Error:', error);
    }


    return throwError(() => new Error(errorMessage));
  }
}