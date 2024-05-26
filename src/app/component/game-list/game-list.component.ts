import {Component, Input} from '@angular/core';
import {VideoGame} from "../../models/videogame.model";
import {RouterLink, RouterModule, RouterOutlet} from "@angular/router";
import {GameCardComponent} from "../game-card/game-card.component";

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    RouterModule,
    GameCardComponent
  ],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css'
})
export class GameListComponent {

  @Input() games: Array<VideoGame> = [];

}
