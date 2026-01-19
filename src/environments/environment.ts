import { Environment } from '../app/core/models/environment.model';

export const environment: Environment = {
  production: false,
  apiUrl: 'http://localhost:5038/api',
  apiTimeout: 30000,
  enableLogging: false
};