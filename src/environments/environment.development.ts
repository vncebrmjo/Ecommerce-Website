import { Environment } from "../app/core/models/environment.model";

export const environment: Environment = {
    production: true,
    apiUrl: 'http://localhost:5038/api',
    apiTimeout: 3000,
    enableLogging: true

};  