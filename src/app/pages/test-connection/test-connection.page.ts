import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestConnectionService } from '../../core/services/test-connection.service';
import { ConnectionResultModel } from '../../core/models/test-connection.model';



@Component({
  selector: 'app-test-connection',
  imports: [],
  templateUrl: './test-connection.page.html',
})
export class TestConnection {
    private readonly connectionTestService = inject(TestConnectionService);
      
    protected readonly isLoading = signal<boolean>(false);
    protected readonly testResult = signal<ConnectionResultModel | null>(null);

    
    protected readonly hasResult = computed(() => this.testResult() !== null);
    protected readonly isSuccess = computed(() => this.testResult()?.success ?? false);

    testConnection(): void {
    this.isLoading.set(true);
    this.testResult.set(null);

    this.connectionTestService.testConnection().subscribe({
      next: (result) => {
        this.testResult.set(result);
        this.isLoading.set(false);
      },
      error: (error) => {
        // Fallback error handling (service should handle most cases)
        this.testResult.set({
          success: false,
          message: 'Unexpected error occurred',
          error: error.message
        });
        this.isLoading.set(false);
      }
    });
  }

}
