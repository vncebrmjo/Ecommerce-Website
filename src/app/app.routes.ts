import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: 'test-connection',
    loadComponent: () => 
      import('./pages/test-connection/test-connection.page')
        .then(m => m.TestConnection),
    title: 'Connection Test'
    },

    {
    path: '',
    redirectTo: '/test-connection',
    pathMatch: 'full'
    },














];
