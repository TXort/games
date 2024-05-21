import { Component } from '@angular/core';
import { VideogameService } from '../../service/videogame.service';
import {VideoGame} from "../../models/videogame.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {

  constructor(private videogameService: VideogameService) {
    this.games$.pipe().subscribe((games: Array<VideoGame>) => {
      console.log(games);
    });

  }

  public games$: Observable<Array<VideoGame>> = this.videogameService.getVideoGames();

}
