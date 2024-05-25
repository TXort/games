import { Routes } from '@angular/router';
import {GameReviewsComponent} from "./pages/game-reviews/game-reviews.component";

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/games/games.component').then(
        (com) => com.GamesComponent
      ),
  },
  {
    path: 'games',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/games/games.component').then(
            (com) => com.GamesComponent
          ),
        pathMatch: 'full',
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./pages/game-reviews/game-reviews.component').then(
            (com) => com.GameReviewsComponent
          ),
      }
    ]
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/games/games.component').then(
        (com) => com.GamesComponent
      ),
  },
];
