export interface Environment {
    readonly production: boolean;
    readonly apiUrl: string;
    readonly apiTimeout: number;
    readonly enableLogging: boolean;

}