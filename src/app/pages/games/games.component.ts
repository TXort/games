import {Component, Signal, signal} from '@angular/core';
import { VideogameService } from '../../service/videogame.service';
import {VideoGame} from "../../models/videogame.model";
import {Observable} from "rxjs";
import {GameListComponent} from "../../component/game-list/game-list.component";
import {AsyncPipe} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {MatProgressSpinner} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [GameListComponent, AsyncPipe, MatIcon, FormsModule, MatProgressSpinner],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {

  searchContent: Signal<string> = signal('');

  constructor(private videogameService: VideogameService) {

  }

  doSearch() {
    if (this.searchContent() === '') {
      this.games$ = this.videogameService.getVideoGames();
    } else {
      this.games$ = this.videogameService.getVideoGamesByTitle(this.searchContent());
    }
  }

  public games$: Observable<Array<VideoGame>> = this.videogameService.getVideoGames();

}
