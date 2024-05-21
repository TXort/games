import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/games/games.component').then(
        (com) => com.GamesComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/games/games.component').then(
        (com) => com.GamesComponent
      ),
  },
  {
    path: 'games',
    loadChildren: () =>
      import('./pages/games/games.component').then(
        (com) => com.GamesComponent
      ),
  },
];
