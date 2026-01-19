// src/app/features/connection-test/services/connection-test.service.ts
import { Injectable, inject } from '@angular/core';
import { Observable, map, catchError, of } from 'rxjs';
import { ApiService } from '../../core/services/api.service';
import { ConnectionResultModel } from '../models/test-connection.model';

/**
 * Service for testing backend connectivity
 * Handles connection validation logic
 */

@Injectable({
  providedIn: 'root'
})
export class TestConnectionService {
  private readonly apiService = inject(ApiService);

  /**
   * Tests connection to backend and returns formatted result
   * @returns Observable of connection test result
   */
  testConnection(): Observable<ConnectionResultModel> {
    return this.apiService.checkHealth().pipe(
      map(response => ({
        success: true,
        message: 'Successfully connected to backend API',
        data: response
      })),
      catchError(error => of({
        success: false,
        message: 'Failed to connect to backend API',
        error: error.message
      }))
    );
  }
}