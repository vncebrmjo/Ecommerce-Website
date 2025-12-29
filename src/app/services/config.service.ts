import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {firstValueFrom} from 'rxjs';

interface AppConfig {
  apiUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private config: AppConfig | null = null;

  constructor(private http: HttpClient) {}

  async loadConfig(): Promise<void>{
    try {

      this.config = await firstValueFrom(
        this.http.get<AppConfig>('/config.json')
      );
      console.log('Configuration loaded:', this.config);
    } catch (error){
      console.error('Failed to load configuration', error);
      throw error;
    }
  }
  get apiUrl(): string {
    if (!this.config) {
      throw new Error('Configuration not loaded');
    }
    return this.config.apiUrl;
  }
  
}
